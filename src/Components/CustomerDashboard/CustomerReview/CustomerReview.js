import React from 'react';
import ReviewForm from './ReviewForm';
import DashboardSideBar from '../../Shared/DashboardSideBar/DashboardSideBar'
import LoggedInUserImg from '../../Shared/LoggedInUserImg/LoggedInUserImg';


const style={
    backgroundColor: '#F4F7FC',
    width: '100%',
    height: '100vh'
}

const CustomerReview = () => {
    return (
        <div className="row m-0 p-0">
            <div className="col-md-2 col-sm-2 justify-content-center" style={{backgroundColor: '#fff'}}>
                {/* <div className="d-flex"> */}
                    <DashboardSideBar />
                {/* </div> */}
            </div>
            <div className="col-md-10 col-sm-10 m-0 p-0" style={style}>
                <div className="top d-flex justify-content-between" style={{backgroundColor: 'white', width: '100%'}}>
                    <h5 className="pl-3 pt-2 pb-2" style={{color: '#7ab259'}}>Review</h5>
                    <LoggedInUserImg />
                </div>

                <ReviewForm />
            </div>
        </div>
    );
};

export default CustomerReview;