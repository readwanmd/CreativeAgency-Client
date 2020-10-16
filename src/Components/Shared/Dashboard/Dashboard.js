import React from 'react';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';
import LoggedInUserImg from '../LoggedInUserImg/LoggedInUserImg';


const style={
    backgroundColor: '#F4F7FC',
    width: '100%',
    height: '100vh'
}

const Dashboard = () => {
    return (
        <div className="">
            <div className="row m-0 p-0">
                <div className="col-md-2 col-sm-2 justify-content-between" style={{backgroundColor: '#fff'}}>
                    <DashboardSideBar />
                </div>
                <div className="col-md-10 col-sm-10 m-0 p-0" style={style}>
                    <div className="top d-flex justify-content-between" style={{backgroundColor: 'white', width: '100%'}}>
                        <h5 className="pl-3 pt-2 pb-2" style={{color: '#7ab259'}}>Dashboard</h5>
                        <LoggedInUserImg />
                    </div>

                    <h1 className="text-center mt-5 pt-5">Your Dashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;