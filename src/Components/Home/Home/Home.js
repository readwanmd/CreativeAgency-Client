import React from 'react';
import Carousel from '../Carousel/Carousel';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Header />
          <Services />
          <Carousel />
          <Feedback />
          <Contact /> 
        </div>
    );
};

export default Home;