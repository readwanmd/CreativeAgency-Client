import React from 'react';
import CarouselSlider from '../CarouselSlider/CarouselSlider';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Header />
          <Services />
          <CarouselSlider />
          <Feedback />
          <Contact /> 
        </div>
    );
};

export default Home;