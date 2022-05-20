import React from 'react';
const BookingService = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p>
          {
            slots?.length ?
              <span>{slots[0]} </span>
              :
              <span className='text-red-500'>Try another date.</span>
          }
        </p>
        <p>{slots?.length} {slots?.length ? 'Spaces' : 'Space'} Available</p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <label
            disabled={slots?.length === 0}
            onClick={() => setTreatment(service)}
            htmlFor="bookingModal"
            className="btn btn-secondary btn-sm text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >Book Appoinment</label>
        </div>
      </div>
    </div>
  );
};

export default BookingService;