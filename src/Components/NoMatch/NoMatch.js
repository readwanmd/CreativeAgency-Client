import React from 'react';
import error from '../../images/error.gif';
import {Link} from 'react-router-dom';

const NoMatch = () => {
    const style = {
        height: '100vh',
        width: '100%',
        backgroundColor: '#D8E2E4',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <div style={style} className="text-center">
            <img style={{width: '250px'}} src={error} alt=""/>
            <h1>Error! 404, route not found.</h1>
            <Link to="/" >
                <p>Go to home page</p>
            </Link>
        </div>
    );
};

export default NoMatch;