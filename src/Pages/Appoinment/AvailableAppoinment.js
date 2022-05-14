import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookingService from './BookingService';

const AvailableAppoinment = ({ date }) => {
  const [avaiableService, setAvaiableService] = useState([]);
  const [treatment, setTreatment] = useState(null)

  useEffect(() => {
    const serviceUrl = 'http://localhost:5000/services';
    const getServices = async () => {
      const { data } = await axios.get(serviceUrl);
      setAvaiableService(data);
    }
    getServices();
  }, [])
  return (
    <div className='max-w-7xl mx-auto lg:py-12'>
      <h3 className='text-2xl text-secondary text-center lg:pb-8'>Available Appoinment on: {format(date, 'PP')}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          avaiableService.map(service => <BookingService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></BookingService>)
        }
      </div>
      {treatment && <BookingModal
        treatment={treatment}
        date={date}
        setTreatment={setTreatment}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppoinment;