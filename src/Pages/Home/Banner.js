import React from 'react';
import chair from '../../../src/assets/images/chair.png';
import bg from '../../../src/assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
  return (
    <div
      className="hero lg:min-h-screen min-w-min"
      style={{
        background: `url(${bg})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto lg:px-12">
        <img src={chair} className="lg:max-w-lg max-w-sm rounded-lg shadow-2xl" alt='Home banner' />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;