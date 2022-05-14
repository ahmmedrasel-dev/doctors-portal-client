import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const BookingService = ({ service }) => {
  const { name, slot } = service;
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body items-center">
        <h2 class="card-title text-primary">{name}</h2>
        <p>
          {
            slot.length ?
              <span>{slot[0]} </span>
              :
              <span className='text-red-500'>Try another date.</span>
          }
        </p>
        <p>{slot.length} {slot.length ? 'Spaces' : 'Space'} Available</p>
        <div class="card-actions">
          <PrimaryButton>Book Appoinment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default BookingService;