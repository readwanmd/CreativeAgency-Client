import React from 'react';
import carousel1 from '../../../images/carousel1.png';
import carousel2 from '../../../images/carousel2.png';
import carousel5 from '../../../images/carousel5.png';

const Carousel = () => {
    return (
        <div style={{backgroundColor: '#111430'}} className= "mt-5 mb-5">
            <div className="container mt-4 mb-5">
                <h2 className="pt-5 pb-5 text-center text-white">Here are some of <span style= {{color: '#7AB259'}}>our works</span></h2>
                <div className="row pb-5">                
                    <div className="col-md-4 mb-2 d-flex justify-content-center">
                        <img style={{width: '350px', height: '245px'}} src={carousel1} alt=""/>
                    </div>
                    <div className="col-md-4 mb-2 d-flex justify-content-center">
                        <img style={{width: '350px', height: '245px'}} src={carousel2} alt=""/>
                    </div>
                    <div className="col-md-4 mb-2 d-flex justify-content-center">
                        <img style={{width: '350px', height: '245px'}} src={carousel5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;