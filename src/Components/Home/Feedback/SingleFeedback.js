import React from 'react';
import './SingleFeedback.css';

const SingleFeedback = ({feedbackData}) => {
    return (
        <div>
            <div className="row m-0 p-0 d-flex justify-content-between">
                {
                    feedbackData.map(data => 
                    <div className="feedback-card col-md-3 col-sm-12 mb-2">
                        <div className="d-flex align-items-center">
                            <img style={{ height: '64px', width: '64px'}} src={data.img} alt=""/>
                            <div className="ml-3">
                                <h6>{data.name}</h6>
                                <h6>{data.companyAndDesignation}</h6>
                            </div>
                        </div>
                        <p className= "mt-1">{data.review}</p>
                    </div>    
                    )
                }
            </div>
        </div>
    );
};

export default SingleFeedback;