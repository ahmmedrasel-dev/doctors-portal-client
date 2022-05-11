import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Feature></Feature>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;