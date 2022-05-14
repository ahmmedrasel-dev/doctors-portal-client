import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonials = () => {
  const review = [
    {
      _id: 1,
      name: 'Smith Jonhs',
      location: 'California',
      img: people1,
      message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
      _id: 2,
      name: 'Winson Herry',
      location: 'Tokeyo',
      img: people2,
      message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
      _id: 3,
      name: 'Pawelo Lemter',
      location: 'Frunkfuit',
      img: people3,
      message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    }
  ]
  return (
    <section className='my-20 max-w-7xl mx-auto'>
      <div className='flex justify-between p-5'>
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <p className='text-3xl'>What Our Patients Says</p>
        </div>
        <div>
          <img className='w-24 lg:w-48' src={quote} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
        {
          review.map(item => <ReviewCard
            key={item._id}
            review={item}
          ></ReviewCard>)
        }
      </div>
    </section>
  );
};

export default Testimonials;  