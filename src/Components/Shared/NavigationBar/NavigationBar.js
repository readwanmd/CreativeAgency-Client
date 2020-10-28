import React, {useContext} from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../App';
import logo from '../../../images/logos/logo.png';
import LoggedInUserImg from '../LoggedInUserImg/LoggedInUserImg';
import './NavigationBar.css';

const NavigationBar = () => {
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <Link to='/'><img style={{ height: '47px', width: '151px' }} src={logo} alt="logo"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="d-flex align-items-center ml-auto">
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none', color: '#000'}}to='/home'>Home</Link>
                    </Nav.Link>
                    {/* <Nav.Link disabled>
                        <Link style={{ textDecoration: 'none', color: '#000'}} to='/portfolio'>Portfolio</Link>
                    </Nav.Link>
                    <Nav.Link disabled>
                        <Link style={{ textDecoration: 'none', color: '#000'}} to='/team'>Team</Link>
                    </Nav.Link>
                    <Nav.Link disabled>
                        <Link style={{ textDecoration: 'none', color: '#000'}} to='/contact-us'>Contact Us</Link>
                    </Nav.Link> */}
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none', color: '#000'}} to='/dashboard'>Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link>
                        {
                            loggedInUser.email ? 
                                <LoggedInUserImg />
                                :
                                <Link style={{ textDecoration: 'none', color: '#000'}} to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;