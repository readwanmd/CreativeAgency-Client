import React, {useContext, useState} from 'react';
import {UserContext} from '../../../App';

const ContactForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [message, setMessage] = useState({
        email: loggedInUser.email || '',
        name: '',
        msg: '',
    })

    const handleBlur = (e) => {
        const newMessage = {...message};
        newMessage[e.target.name] = e.target.value;
        setMessage(newMessage);
    }

    const handleSubmit = (e) => {
        fetch('https://arcane-hamlet-32781.herokuapp.com/addMessage', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(message)
        })
        .then(response => {
            if(response.status === 200) {
                alert('Message send Successfully');
            }
        })
        e.preventDefault();
    }

    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="email" onBlur={handleBlur} className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" required/>
            </div>
            <div class="form-group">
                <input type="text" onBlur={handleBlur} className="form-control" name="name" id="exampleInputPassword1" placeholder="Your Name / Compamy's Name *" required/>
            </div>
            <div class="form-group">
                <textarea name="msg" onBlur={handleBlur} className="form-control" id="" cols="30" rows="10" placeholder="Message *" required/>
            </div>
            <button type="submit" className="btn btn-dark pl-5 pr-5">Send</button>
        </form>
    );
};

export default ContactForm;