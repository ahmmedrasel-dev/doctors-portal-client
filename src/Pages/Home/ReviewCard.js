import React from 'react';

const ReviewCard = ({ review }) => {
  const { name, location, img, message } = review
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{message}</p>

        <div className='flex items-center'>
          <img src={img} alt="" />
          <div className='pl-4'>
            <h2 className="card-title">{name}</h2>
            <h4>{location}</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewCard;