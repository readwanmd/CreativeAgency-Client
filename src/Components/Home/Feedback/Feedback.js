import React, {useEffect, useState} from 'react';
import SingleFeedback from './SingleFeedback';


const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState([])
    useEffect( () => {
        fetch('https://arcane-hamlet-32781.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setFeedbackData(data))
    }, [])
    return (
        <div className="container">
            <h2 className="pt-5 pb-5 text-center" style={{color: '#171B4E'}}>Clients <span style= {{color: '#7AB259'}}>Feedback</span></h2>   

            <SingleFeedback feedbackData={feedbackData} />
        </div>
    );
};

export default Feedback;