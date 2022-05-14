import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingService from './BookingService';

const AvailableAppoinment = ({ date }) => {
  const [avaiableService, setAvaiableService] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setAvaiableService(data))
  }, [])
  return (
    <div className='max-w-7xl mx-auto lg:py-12'>
      <h3 className='text-2xl text-secondary text-center lg:pb-8'>Available Appoinment on: {format(date, 'PP')}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          avaiableService.map(service => <BookingService
            key={service._id}
            service={service}
          ></BookingService>)
        }
      </div>
    </div>
  );
};

export default AvailableAppoinment;