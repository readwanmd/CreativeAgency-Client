import React, {useContext} from 'react';
import {UserContext} from '../../../App';

const LoggedInUserImg = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="m-2">
            <img className="rounded-circle" style={{ height: '40px', width: '40px' }} src={loggedInUser.photo} alt="logo"/> 
        </div>
    );
};

export default LoggedInUserImg;