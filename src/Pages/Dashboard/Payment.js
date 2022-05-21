import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_F7Vho272jVFTDHQwm6PSx4vQ00zuVEmORb');
const Payment = () => {
  const { id } = useParams();
  const url = `https://doctors-portal-server2.herokuapp.com/booking/${id}`;
  const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card max-w-lg w-96  bg-base-100 shadow-xl">
            <div className="card-body">
              <p>Hello, {appoinment.patientName}</p>
              <h2 className="card-title">Pay for {appoinment.teatmentName}</h2>
              <p>We will see you on {appoinment.date} ata {appoinment.slot}</p>
              <p>Please Pay: {appoinment.price}</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-96 max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appoinment={appoinment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;