import React from "react";
import { useState, useEffect } from "react";

function getDate() {
   const today = new Date();
   //const month = today.getMonth() + 1;
   const year = today.getFullYear();
   //const date = today.getDate();
   return `${year}`;
 }

 function Footer(){
   const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const [issubmit, setIsSubmit] = useState(false);

   const [currentDate, setCurrentDate] = useState(getDate());

   const[formData, setFormData] = useState({
      email :'',
      submit: ''
   })

   useEffect(() => {
      if (issubmit) {
          setFormData({
              email: '',
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


  if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "email is required";
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
            isvalid = false;
            validationErrors.email = "email is not valid";
        }


        setErrors(validationErrors);
        setValid(isvalid);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:3000/users', formData)
                .then(result => {
                   alert("Registration Successfully")
                    setIsSubmit(true); // Set issubmit to true to trigger useEffect
                })
                .catch(err => console.log(err))
        }
      };

  return(

  <>
         {/* Start Footer */}
 <footer>
    <div className="footer-row1">
       <div className="container">
          <div className="row">
             <div className="col-lg-6">
                <div className="email-subs">
                   <h3>Get New Insights Weekly</h3>
                   <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
                </div>
             </div>
             <div className="col-lg-6 v-center">
                <div className="email-subs-form">
                   <form onSubmit={handleSubmit}>
                      <input type="email"
                           name="email"
                           value={formData.email}
                           onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                           id="email" 
                           placeholder="Enter your email" />
                      <button type="submit" name="submit" className="lnk btn-main bg-btn">Subscribe <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></button>
                   </form>
                   {
                         valid ? <></> :
                         <span className="text-danger">
                           {errors.email}
                           </span>
                   }
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="footer-row2">
       <div className="container">
          <div className="row justify-content-between">
             <div className="col-lg-3 col-sm-6  ftr-brand-pp">
                <a className="navbar-brand mt30 mb25 f-dark-logo" href="#"> <img src="images/logo.png" alt="Logo"/></a>
                <a className="navbar-brand mt30 mb25 f-white-logo" href="#"> <img src="images/white-logo.png" alt="Logo" /></a>
                <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
                <a href="#" className="btn-main bg-btn3 lnk mt20">Become Partner <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
             </div>
             <div className="col-lg-3 col-sm-6">
                <h5>Contact Us</h5>
                <ul className="footer-address-list ftr-details">
                   <li>
                      <span><i className="fas fa-envelope"></i></span>
                      <p>Email <span> <a href="mailto:info@businessname.com">info@businessname.com</a></span></p>
                   </li>
                   <li>
                      <span><i className="fas fa-phone-alt"></i></span>
                      <p>Phone <span> <a href="tel:+10000000000">+1 0000 000 000</a></span></p>
                   </li>
                   <li>
                      <span><i className="fas fa-map-marker-alt"></i></span>
                      <p>Address <span> 123 Business Centre London SW1A 1AA</span></p>
                   </li>
                </ul>
             </div>
             <div className="col-lg-2 col-sm-6">
                <h5>Company</h5>
                <ul className="footer-address-list link-hover">
                   <li><a href="get-quote.html">Contact</a></li>
                   <li><a href="javascript:void(0)">Customer's FAQ</a></li>
                   <li><a href="javascript:void(0)">Refund Policy</a></li>
                   <li><a href="javascript:void(0)">Privacy Policy</a></li>
                   <li><a href="javascript:void(0)">Terms and Conditions</a></li>
                   <li><a href="javascript:void(0)">License & Copyright</a></li>
                </ul>
             </div>
             <div className="col-lg-4 col-sm-6 footer-blog-">
                <h5>Latest Blogs</h5>
                <div className="single-blog-">
                   <div className="post-thumb"><a href="#"><img src="images/blog/blog-small.jpg" alt="blog"/></a></div>
                   <div className="content">
                      <p className="post-meta"><span className="post-date"><i className="far fa-clock"></i>April 15, 2020</span></p>
                      <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative Consulting Service</a></h4>
                   </div>
                </div>
                <div className="single-blog-">
                   <div className="post-thumb"><a href="#"><img src="images/blog/blog-small.jpg" alt="blog"/></a></div>
                   <div className="content">
                      <p className="post-meta"><span className="post-date"><i className="far fa-clock"></i>April 15, 2020</span></p>
                      <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative Consulting Service</a></h4>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="footer-brands">
       <div className="container">
          <div className="row">
             <div className="col-lg-4 v-center">
                <h5 className="mb10">Top App Development Companies</h5>
                <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
             </div>
             <div className="col-lg-8 v-center">
                <ul className="footer-badges-">
                   <li><a href="#"><img src="images/about/badges-a.png" alt="badges"/></a></li>
                   <li><a href="#"><img src="images/about/badges-b.png" alt="badges"/></a></li>
                   <li><a href="#"><img src="images/about/badges-c.png" alt="badges"/></a></li>
                   <li><a href="#"><img src="images/about/badges-d.png" alt="badges"/></a></li>
                </ul>
             </div>
          </div>
       </div>
    </div>
    <div className="footer-row3">
       <div className="copyright">
          <div className="container">
             <div className="row">
                <div className="col-lg-12">
                   <div className="footer-social-media-icons">
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-facebook"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-twitter"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-instagram"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-linkedin"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-youtube"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-pinterest-p"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-vimeo-v"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-dribbble"></i></a>
                      <a href="javascript:void(0)" target="blank"><i className="fab fa-behance"></i></a>
                   </div>
                   <div className="footer-">
                      <p> {currentDate} All Rights Reserved By <a href="https://themeforest.net/user/rajesh-doot/portfolio" target="blank"><span style={{color : 'red'}}>MAPTREE</span></a></p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </footer>
 {/* End Footer */}
  </>
  
  );
}

export default Footer;