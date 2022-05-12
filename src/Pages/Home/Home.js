import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactHome from './ContactHome';
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
      <ContactHome></ContactHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;