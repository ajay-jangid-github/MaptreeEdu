import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

 const Login =() => {
  const [formData, setFormData] = useState({
    email : '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    


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
     
  let loggedIn = false;


        axios.get('http://localhost:8000/users')
            .then(result => {
              result.data.map(user => { 
                if(user.email === formData.email){
                    if(user.password === formData.password){
                      alert("Login successfully")
                      if(loggedIn){
                        return("u r not logged in")
                      }else{
                        navigate('/');
                      }
                    
                    }else {
                      isvalid = false;
                      validationErrors.password = "invalid password"
                    }
                }
              })

              setErrors(validationErrors);
              setValid(isvalid);
            })
            .catch(err => console.log(err))
    
  };

  return (
    <div className="login-main">
      <section className="login-page pad-tb">
        <div className="v-center m-auto">
          <Link to="#" className="d-block text-center mb30"><img src="images/logo.png" alt="Logo" className="mega-darks-logo" /></Link>
          <div className="login-form-div">
            <h4 className="mb40 text-center">Login to your Account</h4>
            <div className="form-block">
              <form onSubmit={handleSubmit} id="contact-form" method="post" action="#">
                <div className="fieldsets row">
                  <div className="col-md-12 form-group">
                    <input
                      id="form_name"
                      type="text"
                      placeholder="email"
                      name='email'
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                    {
                      valid ? <></> :
                        <span className="text-danger">
                          {errors.email}
                        </span>
                    }
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name='password'
                      value={formData.password}
                      onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    />
                    {
                      valid ? <></> :
                        <span className="text-danger">
                          {errors.password}
                        </span>
                    }
                  </div>
                </div>
                <div className="fieldsets row mt20">
                  <div className="col-md-6 form-group v-center">
                    <button
                      type="submit"
                      className="lnk btn-main bg-btn"
                    >Login <span className="circle"></span></button>
                  </div>

                  <div className="col-md-6 form-group v-center text-right"><a href="#" className="psforgt">Forgot Password?</a> </div>
                </div>
                <hr className="mt30 mb30" />
                <div className="text-center">
                  <p className="mb20">or Login with:</p>
                  <div className="social-btnnxx">
                    <a href="#" className="btn-main fb-btn"><i className="fab fa-facebook-f"></i> Facebook</a>
                    <a href="#" className="btn-main google-btn"><i className="fab fa-google"></i> Google</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;