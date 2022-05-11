import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
  const services = [
    {
      _id: 1,
      name: 'fluride Treatmeat',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam in pariatur?',
      img: cavity
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam in pariatur?',
      img: fluoride
    },
    {
      _id: 3,
      name: 'Teeth Whitening',
      describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam in pariatur?',
      img: whitening
    }
  ]
  return (
    <div className='my-20'>
      <div className="text-center">
        <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
        <h2 className='text-4xl'>Services We Provide</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam in pariatur?
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          services.map(service => <ServicesCard
            key={service._id}
            service={service}
          ></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;