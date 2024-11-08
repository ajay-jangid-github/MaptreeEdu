import React from "react";


export default function(){
  return(

    <>
        {/* Start Header */}
 <header className="nav-bg-w main-header navfix fixed-top menu-white">
    <div className="container-fluid m-pad">
       <div className="menu-header">
          <div className="dsk-logo"><a className="nav-brand" href="./">
             <img src="images/logo.png" alt="Logo" className="mega-white-logo"/>
             <img src="images/logo.png" alt="Logo" className="mega-darks-logo"/>
             </a>
          </div>
          <div className="custom-nav" role="navigation">
             <ul className="nav-list">
                <li className="sbmenu">
                <Link to="/" className="menu-links">Home</Link>
                   
                </li>

                <li className="sbmenu">
                <Link to="/courses" className="menu-links">Courses</Link>
                   
                </li>
                <li className="sbmenu rpdropdown">
                   <a href="#" className="menu-links">Programs</a>
                   <div className="nx-dropdown menu-dorpdown">
                      <div className="sub-menu-section">
                         <div className="sub-menu-center-block">
                            <div className="sub-menu-column smfull">
                               <ul>
                                  <li><a href="portfolio.html">Schooling</a> </li>
                                  <li><a href="portfolio-2.html">It Training</a> </li>
                                  <li><a href="portfolio-block.html">Compititve Exams</a> </li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
                </li>
                {/* <li className="sbmenu rpdropdown">
                   <a href="#" className="menu-links">Blog</a>
                   <div className="nx-dropdown menu-dorpdown">
                      <div className="sub-menu-section">
                         <div className="sub-menu-center-block">
                            <div className="sub-menu-column smfull">
                               <ul>
                                  <li><a href="blog-grid-1.html">Blog Grid 1</a> </li>
                                  <li><a href="blog-grid-2.html">Blog Grid 2</a> </li>
                                  <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a> </li>
                                  <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a> </li>
                                  <li><a href="blog-single.html">Blog Single</a></li>
                               </ul>
                            </div>
                         </div>
                      </div>
                   </div>
               </li> */}
               <li className="sbmenu">
                   <Link to ="/aboutus" className="menu-links">About us</Link>
                   
                </li>
         </ul>
         {/* mobile + desktop - sidebar menu- dark mode witch and button */}
         <ul className="nav-list right-end-btn">                        
         <li className="hidemobile"><a data-bs-toggle="offcanvas" href="#offcanvasExample" className="btn-round- btn-br bg-btn2"><i className="fas fa-phone-alt"></i></a></li>
         <li className="hidemobile"><a href="get-quote.html" className="btn-br bg-btn3 btshad-b2 lnk">Request A Quote <span className="circle"></span></a> </li>              
         <li className="hidedesktop darkmodeswitch"><div className="switch-wrapper"> <label className="switch" for="niwax"> <input type="checkbox" id="niwax"/>  <span className="slider round"></span> </label> </div> </li> 
         <li className="hidedesktop"><a data-bs-toggle="offcanvas" href="#offcanvasExample" className="btn-round- btn-br bg-btn2"><i className="fas fa-phone-alt"></i></a></li>            
         <li className="navm- hidedesktop"> <a className="toggle" href="#"><span></span></a></li>
       </ul>
     </div>
   </div>

       {/* Mobile Menu- */}
       <nav id="main-nav">
          <ul className="first-nav">
             <li>
                <a href="#">Home</a>
                <ul>
                   <li>
                      <a href="#">Multi-Page Demo</a>
                      <ul>
                         <li><a href="digital-agency.html">Digital Agency</a></li>                                             
                         <li><a href="digital-agency-v2.html">Digital Agency V2</a></li>                                             
                         <li><a href="digital-agency-glassmorphism.html">Digital Agency V3</a></li>                                             
                         <li><a href="web-design-agency.html">Web Design Agency</a></li>                                            
                         <li><a href="digital-marketing.html">Digital Marketing</a></li>                                            
                         <li><a href="lead-generation.html">Lead Generation Agency</a></li>
                         <li><a href="landing-page-1.html">Landing Page V1</a></li>
                         <li><a href="landing-page-2.html">Landing Page V2</a></li>
                         <li><a href="freelance-portfolio.html">Freelance Portfolio</a></li>                                            
                         <li><a href="app-development.html">App Development Agency</a></li>
                         <li><a href="minimal-portfolio.html">Minimal Portfolio</a></li>
                         <li><a href="creative-agency.html">Creative Agency</a></li>
                         <li><a href="branding-agency.html">Branding  Agency</a></li>
                         <li><a href="modern-agency.html">Modern Agency</a></li>
                         <li><a href="business-and-startup.html">Business & Startup</a></li>
                         <li><a href="graphic-studio.html">Graphic Studio</a></li>
                      </ul>
                   </li>
                   <li>
                      <a href="#">One-Page Demo</a>
                      <ul>
                         <li><a href="digital-agency-onepage.html">Digital Agency</a></li>
                         <li><a href="digital-agency-dark-onepage.html">Digital Agency Dark</a></li>
                         <li><a href="web-design-agency-onepage.html">Web Design Agency</a></li>
                         <li><a href="web-design-agency-dark-onepage.html">Web Design Agency Dark</a></li>
                         <li><a href="digital-marketing-onepage.html">Digital Marketing</a></li>
                         <li><a href="digital-marketing-dark-onepage.html">Digital Marketing Dark</a></li>
                         <li><a href="lead-generation-onepage.html">Lead Generation Agency</a></li>
                         <li><a href="lead-generation-dark-onepage.html">Lead Generation Agency Dark</a></li>
                         <li><a href="freelance-portfolio-onepage.html">Freelance Portfolio</a></li>
                         <li><a href="freelance-portfolio-dark-onepage.html">Freelance Portfolio Dark</a></li>
                         <li><a href="app-development-onepage.html">App Development Agency</a></li>
                         <li><a href="minimal-portfolio-onepage.html">Minimal Portfolio</a></li>
                         <li><a href="creative-agency-onepage.html">Creative Agency</a></li>
                         <li><a href="branding-agency-onepage.html">Branding  Agency</a></li>
                         <li><a href="modern-agency-onepage.html">Modern Agency</a></li>
                         <li><a href="business-and-startup-onepage.html">Business & Startup</a></li>
                         <li><a href="graphic-studio-onepage.html">Graphic Studio</a></li>
                      </ul>
                   </li>
                </ul>
             </li>
             <li>
                <a href="#">Pages</a>
                <ul>
                   <li><a href="about.html">About Us</a></li>
                   <li><a href="why-us.html">Why Us</a></li>
                   <li><a href="team.html">Our Team</a></li>
                   <li><a href="team-details.html">Team Single</a></li>
                   <li><a href="case-study.html">Case Study</a></li>
                   <li><a href="case-study-details.html">Case Study Single</a></li>
                   <li><a href="mission-vision.html">Mission & Vision</a></li>
                   <li><a href="development-process.html">Development Process</a></li>
                   <li><a href="client-reviews.html">Client Reviews</a> </li>
                   <li><a href="clients.html">Our Clients</a></li>
                   <li><a href="get-quote.html">Contact Us</a> </li>
                   <li><a href="get-quote-2.html">Contact Us 2</a> </li>
                   <li><a href="login.html">Login Page</a> </li>
                   <li><a href="service-card.html">Service Card</a> </li>
                   <li><a href="service-web.html">Service Web</a></li>
                   <li><a href="service-app.html">Service Mobile App</a></li>
                   <li><a href="service-marketing.html">Service Digital Marketing</a></li>
                   <li><a href="service-graphic.html">Service Graphic</a></li>
                   <li><a href="career.html">Careers</a> </li>
                   <li><a href="shop-page.html">Shop Single</a> </li>
                   <li><a href="shop-details.html">Shop Details</a> </li>
                   <li><a href="shop-cart.html">Shop Cart</a> </li>
                </ul>
             </li>
             <li>
                <a href="#">Shortcodes</a>
                <ul>
                   <li><a href="pricing.html">Pricing</a></li>
                   <li><a href="typography.html">Typography</a></li>
                   <li><a href="button.html">Buttons</a></li>
                   <li><a href="locations.html">Office Location</a></li>
                   <li><a href="faq.html">FAQs</a>	</li>
                   <li><a href="tabs.html">Tabs</a></li>
                   <li><a href="error.html">404 Page</a></li>
                   <li><a href="gradients.html">Background Gradients</a></li>
                   <li><a href="header-v1.html">Header v1</a></li>
                   <li><a href="header-v2.html">Header v2</a></li>
                   <li><a href="header-v3.html">Header v3</a></li>
                   <li><a href="footer-design.html">Footer</a></li>
                   <li><a href="hover-animation.html">Hover Animation</a></li>
                   <li><a href="popup-modal.html">Popup Modal</a></li>
                   <li><a href="lists.html">Lists</a></li>
                   <li><a href="bootstrap-components.html">Bootstrap Components</a></li>
                </ul>
             </li>
             <li>
                <a href="#">Portfolio</a>
                <ul>
                   <li><a href="portfolio.html">Portfolio Grid 1</a> </li>
                   <li><a href="portfolio-2.html">Portfolio Grid 2</a> </li>
                   <li><a href="portfolio-block.html">Portfolio Wide Block</a> </li>
                   <li><a href="portfolio-block-2.html">Portfolio Wide Block v2</a> </li>
                   <li><a href="portfolio-details.html">Portfolio Details</a> </li>
                </ul>
             </li>
             <li>
                <a href="#">Blog</a>
                <ul>
                   <li><a href="blog-grid-1.html">Blog Grid 1</a> </li>
                   <li><a href="blog-grid-2.html">Blog Grid 2</a> </li>
                   <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a> </li>
                   <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a> </li>
                   <li><a href="blog-single.html">Blog Single</a></li>
                </ul>
             </li>
          </ul>
          <ul className="bottom-nav">
             <li className="prb">
                <a href="tel:+11111111111">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                      <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                         c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                         c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                         C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                         />
                   </svg>
                </a>
             </li>
             <li className="prb">
                <a href="mailto:somewebmedia@gmail.com">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                   </svg>
                </a>
             </li>
             <li className="prb">
                <a href="skype:niwax.company?call">
                   <svg enable-background="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z"/>
                   </svg>
                </a>
             </li>
          </ul>
       </nav>
    </div>
 </header>       
 {/* End Header */}
   </>
    
   
  );
}