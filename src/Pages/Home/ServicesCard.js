import React from 'react';

const ServicesCard = ({ service }) => {
  const { name, describe, img } = service
  return (
    <div class="card max-w-xl shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{describe}</p>
      </div>
    </div>
  );
};

export default ServicesCard;