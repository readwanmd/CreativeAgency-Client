import React from 'react';

const ServicesTable = ({serviceTableData}) => {
    return (
        <div>
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
        </div>
    );
};

export default ServicesTable;