import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    // if (error) {
    //   setCardError(error.message)
    // } else {
    //   setCardError('')
    // }

    setCardError(error?.message || '')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <span className='text-lg text-red-500'>{cardError}</span>
      }
    </>
  );
};

export default CheckoutForm;

