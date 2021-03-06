import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import BookingService from './BookingService';

const AvailableAppoinment = ({ date }) => {

  const [treatment, setTreatment] = useState(null)
  const formatedDate = format(date, 'PP');

  // Using React Query

  const { data: avaiableService, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`https://doctors-portal-server2.herokuapp.com/available?date=${formatedDate}`).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='max-w-7xl mx-auto lg:py-12'>
      <h3 className='text-2xl text-secondary text-center lg:pb-8'>Available Appoinment on: {formatedDate}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          avaiableService?.map(service => <BookingService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></BookingService>)
        }
      </div>
      {treatment && <BookingModal
        treatment={treatment}
        date={date}
        refetch={refetch}
        setTreatment={setTreatment}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppoinment;