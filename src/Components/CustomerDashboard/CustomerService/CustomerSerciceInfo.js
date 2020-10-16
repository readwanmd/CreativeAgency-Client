import React, {useContext, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {UserContext} from '../../../App';


const CustomerServiceInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceData, setSericeData] = useState([]);
    
    useEffect(() =>{
        fetch('https://arcane-hamlet-32781.herokuapp.com/usersOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setSericeData(data)
        })
    }, [loggedInUser.email])

    return (
        <div className="d-flex justify-content-center">
            <div className="container row mt-5">
            {serviceData.length == 0 && <h4 className="text-center mt-5 mb-5" style={{margin: '0 auto'}}>You have no order!</h4>}
            {
                serviceData && serviceData.map(data => 
                        <div className="col-md-5 m-2 pt-3 pb-3" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
                            <div className="d-flex justify-content-between">
                            {/* <img style={{width: '64px', height: '64px'}} src={data.logo} alt=""/> */}
                            <h5 className="mt-2">{data.projectName}</h5> 
                            <div className="">
                                {
                                    (data.status === 'panding') && <Button variant="danger" disabled>Panding</Button> ||
                                    (data.status === 'onGoing') && <Button variant="warning" style={{color: '#fff'}} disabled>Going On</Button> ||
                                    (data.status === 'done') && <Button variant="success" disabled>Done</Button>
                                }
                            </div>
                        </div>

                        <p>{data.projectDetails}</p>
                    </div>    
                )
            }
        </div>
        </div>
    );
};

export default CustomerServiceInfo;



  
  