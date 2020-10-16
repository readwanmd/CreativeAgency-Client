import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from '../../../images/carousel1.png';
import carousel2 from '../../../images/carousel2.png';
import carousel3 from '../../../images/carousel3.png';
import carousel4 from '../../../images/carousel4.png';
import carousel5 from '../../../images/carousel5.png';

 const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselSlider = () => {
    const carouselImg = [carousel1, carousel2, carousel3, carousel4, carousel5];

    return (
        <div style={{backgroundColor: '#111430'}} className= "mt-5 mb-5 pb-5">
            <div className="container mt-4 mb-5">
                <h2 className="pt-5 pb-5 text-center text-white">Here are some of <span style= {{color: '#7AB259'}}>our works</span></h2>
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}
                    keyBoardControl={true}  dotListClass="custom-dot-list-style" showDots={true}>
                    {
                        carouselImg.map(carousel=>{
                            return(
                                <div>
                                    <img style={{width: '350px', height: '245px'}} className='carousel-image' src={carousel} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselSlider;