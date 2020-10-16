import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

const AddServiceForm = () => {
    const [service, setService] = useState({
        title: '',
        description: ''
    })
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('https://arcane-hamlet-32781.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if(response.status === 200) {
                alert('Service added successfully');
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <form className="m-5" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 col-sm-12 p-4"  style={{ background: '#fff', borderRadius: "8px" }}>
                        <div class="form-group">
                            <h6>Title</h6>
                            <input type="text" onBlur={handleBlur} name="title" className="form-control" placeholder="Enter Title *" required/>
                        </div>
                        <div class="form-group">
                            <h6>Description</h6>
                            <input type="text" onBlur={handleBlur} name="description" className="form-control" placeholder="Enter Deseription *" required/>
                        </div>
                        <h6>Icon</h6>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <Form.File onChange={handleFileChange} name="file" id="exampleFormControlFile1" required/>
                                {/* <label for="customFile">Choose Icon</label>
                                <input onChange={handleFileChange} type="file" name="file" class="custom-file-input" id="customFile" required/> */}

                                {/* <label htmlFor="exampleInputPassword1">Upload a image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" /> */}
                            </div>
                        </div>
                        <br />
                            <button type="submit" className="btn btn-dark pl-5 pr-5">Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddServiceForm;