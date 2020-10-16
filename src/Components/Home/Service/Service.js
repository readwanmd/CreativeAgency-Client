import React from 'react';
import {Link} from 'react-router-dom';
import './sercice.css';
import loading from '../../../images/loading.gif';

const Service = ({serviceData}) => {
    return (
        <div className="row m-0 p-0 d-flex justify-content-around">
            {
                serviceData.length === 0 && <img className="mt-3" style={{width: '200px', height: '150px'}} src={loading} alt=""/>
            }
            {
                serviceData.map(data => 
                <div className="col-md-4 col-sm-12 mb-2 text-center sercice-card ">
                    <Link to={`/dashboard/c-order/${data.title}`}  style={{textDecoration: 'none', color: '#000'}}>
                        <img className="mt-3" style={{width: '74px', height: '74px'}} src={`data:image/png;base64,${data.image.img}`} alt=""/>
                        <h5 className="mt-3 mb-2">{data.title}</h5>
                        <p style={{fontWeight: '300'}}>{data.description}</p>
                    </Link>
                </div>
                )
            }
        </div>
    );
};

export default Service;