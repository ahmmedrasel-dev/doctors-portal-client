import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const ContactHome = () => {

  return (
    <section style={{
      background: `url(${appointment
        })`
    }} className='mb-20 py-24'>
      <div className='text-center mb-12'>
        <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
        <p className='text-5xl text-white'>Stay Connected with us</p>
      </div>

      <div className='max-w-xl mx-auto'>
        <form className='grid grid-cols-1 gap-5'>
          <input type="email" placeholder="Email Addrss" className="input input-bordered input-primary w-full max-w-xl" />
          <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xl" />
          <textarea className="textarea textarea-primary w-full max-w-xl" placeholder="Message" rows={6}></textarea>
          <div className='text-center'>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactHome;