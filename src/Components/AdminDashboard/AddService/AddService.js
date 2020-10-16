import React  from 'react';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar';
import LoggedInUserImg from '../../Shared/LoggedInUserImg/LoggedInUserImg';
import AddServiceForm from './AddServiceForm';

const style={
    backgroundColor: '#F4F7FC',
    width: '100%',
    height: '100vh'
}

const AddService = () => {
    
    return (
        <div className="">
            <div className="row m-0 p-0">
                <div className="col-md-2 col-sm-2 justify-content-between" style={{backgroundColor: '#fff'}}>
                    <DashboardSideBar />
                </div>
                
                <div className="col-md-10 col-sm-10 m-0 p-0" style={style}>
                    <div className="top d-flex justify-content-between" style={{backgroundColor: 'white', width: '100%'}}>
                        <h5 className="pl-3 pt-2 pb-2" style={{color: '#7ab259'}}>Add Service</h5>
                        <LoggedInUserImg />
                    </div>

                    <AddServiceForm />
                    
                </div>
            </div>
        </div>
    );
};

export default AddService;