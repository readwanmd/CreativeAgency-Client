import React, {useContext, useState} from 'react';
import {Form} from 'react-bootstrap';
import {UserContext} from '../../../App';

const OrderForm = ({pName}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [file, setFile] = useState(null);
    const [orderInfo, setOrderInfo] = useState({
        name: '',
        email: loggedInUser.email,
        projectName: pName,
        projectDetails: '',
        price: '',
    })

    const handleBlur = (e) => {
        const newOrderInfo = {...orderInfo};
        newOrderInfo[e.target.name] = e.target.value;
        setOrderInfo(newOrderInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', orderInfo.name);
        formData.append('email', orderInfo.email);
        formData.append('projectName', orderInfo.projectName);
        formData.append('projectDetails', orderInfo.projectDetails);
        formData.append('price', orderInfo.price);
        formData.append('status', "panding");

        fetch('https://arcane-hamlet-32781.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })

        e.preventDefault();
    }



    // const handleSubmit = (e) => {
    //     fetch('https://arcane-hamlet-32781.herokuapp.com/placeOrder', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(orderInfo)
    //     })
    //     .then(response => {
    //         if(response.status === 200) {
    //             alert('order Placed Successfully');
    //         }
    //     })

    //     console.log(orderInfo);

    //     e.preventDefault();
    // }
    
    return (
        <form className="m-5 p-4" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: "8px" }}>
            <div class="form-group">
                <h6>Name</h6>
                <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Your Name / Compamy's Name *" required/>
            </div>
            <div className="form-group">
                <h6>Email</h6>
                <input type="email" onBlur={handleBlur} className="form-control" name="email" placeholder="Your Email *" value={loggedInUser.email} disabled/>
            </div>
            <div class="form-group">
                <h6>Project Name</h6>
                <input type="text" onBlur={handleBlur} className="form-control" name="projectName" placeholder="Project Name *" value={pName} />
            </div>
            <div class="form-group">
                <h6>Project Details</h6>
                <textarea className="form-control" onBlur={handleBlur} cols="20" rows="5" name="projectDetails" placeholder="Project Details *" required/>
            </div>
            <div class="form-row">
                <div class="col">
                    <h6>Price</h6>
                    <input type="text" onBlur={handleBlur} className="form-control" name="price" placeholder="Price *" required/>
                </div>
                <div class="col">
                    <h6>Upload</h6>
                    <Form.File  onChange={handleFileChange} name="file" id="exampleFormControlFile1" required/>
                </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-dark pl-5 pr-5">Place Order</button>
        </form>
    );
};

export default OrderForm;