import React, {useContext, useState} from 'react';
import './DashboardSideBar.css';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListUl, faListAlt, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logos/logo.png';
import {UserContext} from '../../../App';
import {useEffect} from 'react';

const DashboardSideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://arcane-hamlet-32781.herokuapp.com/adminAccess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser.email])

    return (
        <div>
            <Link to='/'><img className="mt-2" style={{ height: '47px', width: '151px' }} src={logo} alt="logo"/></Link>
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex justify-content-start">
                        <div className="mt-5" >
                            {isAdmin ? 
                                <>
                                    <Link to='/dashboard/service-list' style={{ textDecoration: 'none', color: '#000'}}>
                                        <h5 className=" pt-2 pb-2"><FontAwesomeIcon icon={faListAlt} className="mr-2" />Service List</h5>
                                    </Link>
                                    <Link to='/dashboard/add-service' style={{ textDecoration: 'none', color: '#000'}}>
                                        <h5 className=" pt-2 pb-2"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service</h5>
                                    </Link>
                                    <Link to='/dashboard/add-admin' style={{ textDecoration: 'none', color: '#000'}}>
                                        <h5 className=" pt-2 pb-2"><FontAwesomeIcon icon={faUserPlus} className="mr-2" />Add Admin</h5>
                                    </Link>
                                </> :

                                <>
                                    <Link to='/dashboard/c-order' style={{ textDecoration: 'none', color: '#000'}}>
                                        <h5 className=" pt-2 pb-2"><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Order</h5>
                                    </Link>
                                    <Link to='/dashboard/c-service' style={{ textDecoration: 'none', color: '#000'}}>
                                        <h5 className=" pt-2 pb-2"><FontAwesomeIcon icon={faListUl} className="mr-2" />Service List</h5>
                                    </Link>
                                    <Link to='/dashboard/c-review' style={{ textDecoration: 'none', color: '#000'}}>
                                        <h5 className=" pt-2 pb-2"><FontAwesomeIcon icon={faCommentDots} className="mr-2" />Review</h5>
                                    </Link> 
                                </>}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardSideBar;