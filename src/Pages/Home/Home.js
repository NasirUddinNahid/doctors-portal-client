import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Footer from './Shared/Footer';
import HomePageAppointment from './HomePageAppointment';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <Exceptional></Exceptional>
          <HomePageAppointment></HomePageAppointment>
          <Testimonial></Testimonial>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;