import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div id="Contact" className="mt-5" style={{backgroundColor: '#FBD062'}}>
            <div className="row m-0 p-0">
                <div className="col-md-5 col-sm-12 pl-5">
                    <h1 className="mt-5">Let us handle your<br/>
                    project, <span style= {{color: '#7AB259'}}>professionally.</span></h1>
                    <p style= {{fontWeight: '300'}}>With well written codes, we build amazing apps for all platforms,<br/> mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <ContactForm />
                </div>
            </div>
            <footer className="text-center mt-5 pb-4">
                <small>&copy; Creative Agency, {new Date().getFullYear()} </small>
            </footer>
        </div>
    );
};

export default Contact;