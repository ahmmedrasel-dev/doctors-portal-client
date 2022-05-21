import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appoinment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState('');
  const [procesing, setProcesing] = useState(false);
  const [cardError, setCardError] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const [clientSecret, setClientSecret] = useState('');
  const { price, patientName, patiendEmail, _id } = appoinment;

  useEffect(() => {
    fetch("https://doctors-portal-server2.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price }),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      });
  }, [price]);


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
    setSuccess('')
    setProcesing(true)
    // Confirm Card Payment
    const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patiendEmail
          },
        },
      },
    );

    if (intendError) {
      setCardError(intendError?.message)
      setProcesing(false)
    } else {
      setCardError('')
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! Your Payment is Complete.')
      // Store paymnet info in database,
      const payment = {
        appoinment: _id,
        transactionId: paymentIntent.id
      }
      fetch(`https://doctors-portal-server2.herokuapp.com/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      }).then(res => res.json())
        .then(data => {
          setProcesing(false)
          console.log(data);
        })
    }
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
        <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        cardError && <span className='text-lg text-red-500'>{cardError}</span>
      }
      {
        success && <div>
          <span className='text-lg text-green-500'>{success}</span>
          <p>Your Transaction Id: <span className='text-red-500'>{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;

