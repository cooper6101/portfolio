import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table
} from 'reactstrap';

import CheckoutForm from './CheckoutForm';

const promise = loadStripe(
  'pk_test_51BszDrB83NmCeu8Qrm7f8N8uJRMiNBhUNFddPZgQIyQhL6OPEQIA0d2ujQGwj14EQzlt7ZIsD5UFZQ2wyQELis9T00iMhLM3lR'
);

const StripeDemo = () => {
  return (
    <div className='contactus-1 section-image' id='stripe-api-demo'>
      <Container>
        <Row>
          <Col md='5'>
            <h2 className='title'>Stripe Demo</h2>
            <h4 className='description'>
              Use this form to make a payment with Stripe! Don't worry the form
              is a demo only and cannot actually charge cards.
            </h4>
            <div className='info info-horizontal'>
              <div className='icon icon-info'>
                <i className='now-ui-icons tech_mobile'></i>
              </div>
              <div className='description' style={{ fontWeight: '600' }}>
                <h4 className='info-title'>Demo Data</h4>
                <p className='description'>
                  Enter any numbers for exp, cvv, and zip
                </p>
                <p className='description'>For A successful payment:</p>
                <ul>
                  <li>Card Number: 4242-4242-4242-4242</li>
                </ul>
                <p className='description'>For A Failed payment:</p>
                <ul>
                  <li>Card Number: 4000-0000-0000-9995</li>
                </ul>
                <p className='description'>Payment Requires Authentication:</p>
                <ul>
                  <li>Card Number: 4000-0025-0000-3155</li>
                </ul>
              </div>
            </div>
            <div className='info info-horizontal'>
              <div className='icon icon-info'>
                <i className='now-ui-icons users_single-02'></i>
              </div>
              <div className='description'>
                <h4 className='info-title'>What else can Stripe Do?</h4>
                <p className='description'>
                  Stripe is a very powerful payment API used all over the world.
                  I am familiar with using Stripe to set up single payments,
                  subscriptions, and more! Let me know what you want to
                  accomplish and I'll make it happen.
                </p>
              </div>
            </div>
          </Col>
          <Col className='ml-auto mr-auto align-items-center d-flex' md='6'>
            <Card className='card-contact card-raised'>
              <CardHeader className='text-center'>
                <CardTitle tag='h4'>Make a Payment</CardTitle>
              </CardHeader>
              <CardBody className='d-flex flex-column align-items-center'>
                <Table style={{ width: '80%' }}>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Website Consult</td>
                      <td>Intro Session to discuss web development needs</td>
                      <td>$15.00</td>
                    </tr>
                    <tr>
                      <td className='lead'>Total</td>
                      <td></td>
                      <td>$15.00</td>
                    </tr>
                  </tbody>
                </Table>

                <Elements stripe={promise}>
                  <CheckoutForm />
                </Elements>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StripeDemo;
