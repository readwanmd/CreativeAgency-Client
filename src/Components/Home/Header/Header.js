import React from 'react';
import {Button} from 'react-bootstrap';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Frame from '../../../images/logos/Frame.png';
import './Header.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-section mb-5">
                <div className="container">
                    <NavigationBar />

                    <div className="row">
                        <div className="col-md-5 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1>Let’s Grow Your<br/>Brand To The<br/>Next Level</h1>
                                <p style={{fontWeight: '450'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sequi impedit dolores hic tempore assumenda.</p>
                                <Link to="/dashboard/c-order">
                                    <Button className="pl-5 pr-5" variant="dark">Hire Us</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <img className="img-fluid" src={Frame} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="">
                <h2 className="text-center mt-5" style={{color: '#171B4E'}}>Some of our <span style={{color: '#7AB259'}}>partners</span></h2>
                <div className="row mr-0 ml-0 mt-5 d-flex justify-content-center">
                    <div className="col-md-2 d-flex justify-content-center mb-3">
                        <img style={{width: '140px', height: '36px'}} src={slack} alt="slack"/>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center mb-2">
                        <img style={{width: '129px', height: '44px'}} src={google} alt="google"/>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center mb-2">
                        <img style={{width: '99px', height: '56px'}} src={uber} alt="uber"/>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center mb-2">
                        <img style={{width: '120px', height: '67px'}} src={netflix} alt="netflix"/>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center mb-2">
                        <img style={{width: '161px', height: '51px'}} src={airbnb} alt="airbnb"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;