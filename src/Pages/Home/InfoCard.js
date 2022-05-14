import React from 'react';


const InfoCard = ({ img, cartTitle, bgColor }) => {
  return (
    <div className={`card lg:card-side bg-accent p-4 shadow-xl ${bgColor}`}>
      <figure>
        <img className='pl-4' src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{cartTitle}</h2>
        <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;