import React, {useContext, useState} from 'react';
import {UserContext} from '../../../App';

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [review, setReview] = useState({
        name: loggedInUser.name,
        img: loggedInUser.photo,
        companyAndDesignation: '',
        review: '',
    })

    const handleBlur = (e) => {
        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleSubmit = (e) => {
        fetch('https://arcane-hamlet-32781.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(response => {
            if(response.status === 200) {
                alert('Review Placed Successfully');
            }
        })

        e.preventDefault();
    }

    return (
        <form className="m-5 p-4" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: "8px" }}>
            <div class="form-group">
                <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Your Name *" value={loggedInUser.name} required/>
            </div>               
            <div class="form-group">
                <input type="text" onBlur={handleBlur} className="form-control" name="companyAndDesignation" placeholder="Company's name, Designation *" required/>
            </div>
            <div class="form-group">
            <textarea name="review" onBlur={handleBlur} className="form-control" id="" cols="30" rows="4" placeholder="Description *" required/>
            </div>
            <br/>
            <button type="submit" className="btn btn-dark pl-5 pr-5">Submit</button>
        </form>
    );
};

export default ReviewForm;