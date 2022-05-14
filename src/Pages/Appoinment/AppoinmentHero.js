import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../../src/assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentHero = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div
      className="hero lg:min-h-screen min-w-min"
      style={{
        background: `url(${bg})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='w-1/2 lg:pl-12'>
          <img className='max-w-xl rounded shadow-lg' src={chair} alt='Dentist Chair' />
        </div>
        <div className='bg-white'>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppoinmentHero;