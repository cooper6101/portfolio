import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Alert, Container } from 'reactstrap';

const CheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [alert1, setAlert1] = useState(true);
  const [alert2, setAlert2] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const fetchPaymentIntent = async () => {
    const paymentIntent = await axios.post(
      '/api/api-routes/create-payment-intent',
      config
    );

    setClientSecret(paymentIntent.data.clientSecret);
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetchPaymentIntent();
    //eslint-disable-next-line
  }, []);
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  return (
    <form id='payment-form' onSubmit={handleSubmit} className='stripe-form'>
      <CardElement
        id='card-element'
        options={cardStyle}
        onChange={handleChange}
      />
      <button
        disabled={processing || disabled || succeeded}
        id='submit'
        className='stripe-button'
      >
        <span id='button-text'>
          {processing ? (
            <div className='spinner' id='spinner'></div>
          ) : (
            'Pay now'
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <Alert color='danger' isOpen={alert2} className='mt-2'>
          <Container>
            <div className='alert-icon'>
              <i className='now-ui-icons ui-2_like'></i>
            </div>
            {error}
            <button
              type='button'
              className='close'
              onClick={() => setAlert2(false)}
            >
              <span aria-hidden='true'>
                <i className='now-ui-icons ui-1_simple-remove'></i>
              </span>
            </button>
          </Container>
        </Alert>
      )}
      {/* Show a success message upon completion */}
      {succeeded && (
        <Alert color='success' isOpen={alert1} className='mt-2'>
          <Container>
            <div className='alert-icon'>
              <i className='now-ui-icons ui-2_like'></i>
            </div>
            <strong>Payment succeeded!</strong> Refresh the page to pay again.
            <button
              type='button'
              className='close'
              onClick={() => setAlert1(false)}
            >
              <span aria-hidden='true'>
                <i className='now-ui-icons ui-1_simple-remove'></i>
              </span>
            </button>
          </Container>
        </Alert>
      )}
    </form>
  );
};

export default CheckoutForm;
