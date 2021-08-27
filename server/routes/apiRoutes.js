const express = require('express');
const router = express.Router();
const {
  getSimpleData,
  sendTwilioMessage,
  getVimeoShowcase,
  sendSendgridEmail,
  createPaymentIntent
} = require('../controllers/apiController');

// Get simple data
router.get('/simple-data', getSimpleData);

// Send Twilio Message
router.post('/send-twilio-message', sendTwilioMessage);

// Send Twilio Message
router.get('/get-vimeo-showcase', getVimeoShowcase);

// Send Sendgrid Email
router.post('/send-sendgrid-email', sendSendgridEmail);

// Create Payment Intent
router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;
