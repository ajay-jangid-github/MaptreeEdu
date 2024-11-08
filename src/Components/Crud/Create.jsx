import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate}  from "react-router-dom";

import { Link } from "react-router-dom";

const Create = ()=>{

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    Dtype: '',
    message: ''
});

const [errors, setErrors] = useState({});
const [valid, setValid] = useState(true);
const [issubmit, setIsSubmit] = useState(false);
const navigate = useNavigate()


useEffect(() => {
    if (issubmit) {
        setFormData({
            name: '',
            email: '',
    password: '',
            mobile: '',
            Dtype: '',
            message: '',
    submit: ''
        });
    }
}, [issubmit]);

const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    let isSubmit = true;
    let submissionMsg = {};

    if(issubmit == true){
      isSubmit = false;
      submissionMsg.submit = "success";
    }

    if (formData.name === "" || formData.name === null) {
        isvalid = false;
        validationErrors.name = "name is required";
    }


    if (formData.email === "" || formData.email === null) {
        isvalid = false;
        validationErrors.email = "email is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
        isvalid = false;
        validationErrors.email = "email is not valid";
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password is required";
  }

    if (formData.mobile === "" || formData.mobile === null) {
        isvalid = false;
        validationErrors.mobile = "mob. number is required";
    } else if (formData.mobile.length < 10) {
        isvalid = false;
        validationErrors.mobile = "mobile number length should be at least 10 digits";
    }

    if (formData.Dtype === "" || formData.Dtype === null) {
        isvalid = false;
        validationErrors.Dtype = "select one option";
    }

    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
        axios.post('http://localhost:8000/users', formData)
            .then(result => {
               alert("User Added Successfully")
                setIsSubmit(true); // Set issubmit to true to trigger useEffect
        navigate('/crud_data')
            })
            .catch(err => console.log(err))
    }
};
  return(

    <>
     <section className="hero-card-web-request-quote bg-gradient12 shape-bg3"> </section>
            {/* Breadcrumb Area */}
            {/* End Breadcrumb Area */}
            {/* Start Enquire Form */}
            <section className="contact-page pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 v-center">
                            <div className="common-heading text-l">
                                <span>Add User</span>
                              
                            </div>
                            <div className="form-block">
                                <form onSubmit={handleSubmit} id="contactForm" data-bs-toggle="validator" className="shake">
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                                                id="name" placeholder="Enter name" />
                                            {
                                                valid ? <></> :
                                                    <span className="text-danger">
                                                        {errors.name}
                                                    </span>
                                            }
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                                id="email" placeholder="Enter email" />
                                            {
                                                valid ? <></> :
                                                    <span className="text-danger">
                                                        {errors.email}
                                                    </span>
                                            }
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
																		<div className="form-group col-sm-6">
                                            <input type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                                id="email" placeholder="Enter password" />
                                            {
                                                valid ? <></> :
                                                    <span className="text-danger">
                                                        {errors.password}
                                                    </span>
                                            }
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="text"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={(event) => setFormData({ ...formData, mobile: event.target.value })}
                                                id="mobile" placeholder="Enter mobile" />
                                            {
                                                valid ? <></> :
                                                    <span className="text-danger">
                                                        {errors.mobile}
                                                    </span>
                                            }
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <select name="Dtype"
                                                value={formData.Dtype}
                                                onChange={(event) => setFormData({ ...formData, Dtype: event.target.value })}
                                                id="Dtype" >
                                                <option value="">Select Requirement</option>
                                                <option value="web">web</option>
                                                <option value="graphic">graphic</option>
                                                <option value="video">video</option>
                                            </select>
                                            {
                                                valid ? <></> :
                                                    <span className="text-danger">
                                                        {errors.Dtype}
                                                    </span>
                                            }
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                                            rows="5" placeholder="Enter your message" ></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <button type="submit" name="submit" 
																		value={formData.submit}
																		onChange={(event) => setFormData({ ...formData, submit: event.target.value })}
																		id="form-submit" className="btn btn-success">Submit <span className="circle"></span></button>
                                    <Link to = "/"  className = "btn btn-primary ms-3"  style={{marginTop: "20px"}}>back</Link>
																		{
                                                valid ? <></> :
                                                    <span className="text-danger">
                                                        {errors.submit}
                                                    </span>
                                            }
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                        {/* Other parts of your component */}
												
                    </div>
                </div>
            </section>
    </>
  );
}

export default Create;