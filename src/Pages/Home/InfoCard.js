import React from 'react';


const InfoCard = ({ img, cartTitle, bgColor }) => {
  return (
    <div class={`card lg:card-side bg-accent shadow-xl ${bgColor}`}>
      <figure>
        <img className='pl-4' src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-white">{cartTitle}</h2>
        <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;