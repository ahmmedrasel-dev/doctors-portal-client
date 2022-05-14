import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentHero from './AppoinmentHero';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <AppoinmentHero date={date} setDate={setDate}></AppoinmentHero>
      <AvailableAppoinment date={date}></AvailableAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;