import React from 'react';
import loading from '../../../images/loading.gif';

const ServicesTable = ({serviceTableData}) => {
    return (
        <div>
            { (serviceTableData.length === 0) ? 
                <div className="d-flex justify-content-center">
                    <img className="mt-3" style={{width: '200px', height: '150px'}} src={loading} alt=""/> 
                </div> :
                
                <table class="table text-center mt-5" style={{backgroundColor: '#fff', width: '90%', margin: '0 auto'}}>
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        serviceTableData.map(data => 
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.projectName}</td>
                                <td>{data.status}</td>
                            </tr>
                            ) 
                        }
                    </tbody>
                </table>
            }
        </div>
    );
};

export default ServicesTable;