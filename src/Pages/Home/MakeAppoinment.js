import React from 'react';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const MakeAppoinment = () => {

  return (
    <section
      style={{ background: `url(${appointment})` }}
      className='flex justify-center items-center'>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-180px]' src={doctor} alt="" />
      </div>
      <div className='flex-1'>
        <h3 className='text-xl text-primary'>Apoinment</h3>
        <h2 className='text-3xl text-white'>Make on appoinment Today.</h2>
        <p className='text-md text-white py-4 pr-12'>Search for and book a doctor's appointment, either in-clinic, or a teleconsulation. Your booking is automatically confirmed, as the doctor specifies his working hours and is notified of the booking details.</p>

        <PrimaryButton>Get Stated</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;