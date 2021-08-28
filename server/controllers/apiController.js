const asyncHandler = require('express-async-handler');
const axios = require('axios');
const sgMail = require('@sendgrid/mail');
const sendgridApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridApiKey);

// Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

// Vimeo
let Vimeo = require('vimeo').Vimeo;
const vimeoClientId = process.env.VIMEO_CLIENT_ID;
const vimeoAccessToken = process.env.VIMEO_ACCESS_TOKEN;
const vimeoClientSecret = process.env.VIMEO_CLIENT_SECRET;
let vimeoClient = new Vimeo(vimeoClientId, vimeoClientSecret, vimeoAccessToken);

// Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @desc    get simple data
// @route   GET /api/api-routes/simple-data/
// @access  Public
const getSimpleData = asyncHandler(async (req, res) => {
  try {
    const simpleData = {
      name: 'Trey Cooper',
      email: 'trey@mnmlhealth.com',
      phone: '850-567-0890'
    };

    res.status(201).json({ simpleData });
  } catch (error) {
    res.status(404).send(`There was an error retrieving your data, ${error}`);
  }
});

// @desc    send Twilio Message
// @route   GET /api/api-routes/send-twilio-message/
// @access  Public
const sendTwilioMessage = asyncHandler(async (req, res) => {
  const { firstName, lastName, phone, message } = req.body;

  try {
    const msg = await client.messages.create({
      body: `Hey, ${firstName} ${lastName}! Here's your message - ${message}`,
      from: twilioNumber,
      to: `+1${phone}`
    });

    res.status(201).json({ msg });
  } catch (error) {
    res.status(404).send(`There was an error sending your text, ${error}`);
  }
});

// @desc    Load Vimeo Showcase
// @route   GET /api/api-routes/load-vimeo-showcase/
// @access  Public
const getVimeoShowcase = asyncHandler(async (req, res) => {
  try {
    await vimeoClient.request(
      {
        method: 'GET',
        path: '/users/79941096/albums/8768795/videos'
      },
      (error, body) => {
        if (error) {
          console.log(error);
        }
        res.status(200).json({ showcase: body });
      }
    );
  } catch (error) {
    res.status(404).send(`There was an error retrieving your data, ${error}`);
  }
});

// @desc    Send sendgrid email
// @route   Post /api/api-routes/send-sendgrid-email/
// @access  Public
const sendSendgridEmail = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  try {
    const msg = {
      to: email,
      from: 'admin@mnmlhealth.com',
      subject: `Your Email from Trey's Portfolio Site`,
      text: `Hey ${firstName} ${lastName}! Thanks for using my sendgrid demo  form. Here's your message ${message}`,
      html: `<strong>Hey ${firstName} ${lastName}! Thanks for using my sendgrid demo  form. Here's your message ${message}</strong>`
    };
    await sgMail.send(msg);

    res.json({
      msg: 'Thanks for using the Sendgrid API Demo!'
    });
  } catch (error) {
    console.log(error);
    console.error(error.response.body);
    res.status(404);
    throw new Error(
      'Something went wrong. Please contact me so I can fix it at cooper6101@gmail.com'
    );
  }
});

// @desc    Create Payment Intent
// @route   Post /api/api-routes/create-payment-intent
// @access  Public
const createPaymentIntent = asyncHandler(async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1500,
    currency: 'usd'
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = {
  getSimpleData,
  sendTwilioMessage,
  getVimeoShowcase,
  sendSendgridEmail,
  createPaymentIntent
};
