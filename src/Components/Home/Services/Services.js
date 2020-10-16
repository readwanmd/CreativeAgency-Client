import React, {useEffect, useState} from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect( () => {
        fetch('https://arcane-hamlet-32781.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mt-5 mb-5" style={{color: '#171B4E'}}>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
            <Service serviceData={serviceData} />
        </div>
    );
};

export default Services;