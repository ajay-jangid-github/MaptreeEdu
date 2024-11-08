import React from "react";
import Sidebar from "../Side_Bar/Sidebar";
import Popup from "../Pop_Up/Popup";
import Courses from "../Courses";
import { Link } from "react-router-dom";




export default function Home() {

   return (
      < div className="active-light">

         <Sidebar />
         <Popup />

         {/* Start Hero */}
         <section class="hero-card-web bg-gradient12 shape-bg3">
            <div class="hero-main-rp container-fluid">
               <div class="row">
                  <div class="col-lg-5">
                     <div class="hero-heading-sec">
                        <h2 class="wow fadeIn" data-wow-delay="0.3s"><span>Web.</span> <span>Mobile.</span> <span>Graphic.</span> <span>Marketing.</span></h2>
                        <p class="wow fadeIn" data-wow-delay="0.6s">Website and App development solution for transforming and innovating businesses.</p>
                        <Link to="case-study.html" class="niwax-btn2 wow fadeIn" data-wow-delay="0.8s">View Courses <i class="fas fa-chevron-right fa-ani"></i></Link>
                        <Link to="case-study.html" class="niwax-btn2 wow fadeIn" data-wow-delay="0.8s">Start Learning <i class="fas fa-chevron-right fa-ani"></i></Link>
                        <div class="awards-block-tt  wow fadeIn" data-wow-delay="1s"><img src="images/hero/awards-logo.png" alt="awards-logo" class="img-fluid" /></div>
                     </div>
                  </div>
                  <div class="col-lg-7">
                     <div class="hero-content-sec wow fadeIn" data-wow-delay="0.8s">
                        <div class="video-intro-pp"><a class="video-link play-video" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0"><span class="triangle-play"></span></a></div>
                        <div class="title-hero-oth">
                           <p>We design digital solutions <span>for brands and companies</span></p>
                        </div>
                     </div>
                     <div class="hero-right-scmm">
                        <div class="hero-service-cards wow fadeInRight" data-wow-duration="2s">
                           <div class="owl-carousel service-card-prb">
                              <div class="service-slide card-bg-a" data-tilt data-tilt-max="10" data-tilt-speed="1000">
                                 <a href="#">
                                    <div class="service-card-hh">
                                       <div class="image-sr-mm">
                                          <img alt="custom-sport" src="images/service/vr.png" />
                                       </div>
                                       <div class="title-serv-c"><span>VR</span> Solution</div>
                                    </div>
                                 </a>
                              </div>
                              <div class="service-slide card-bg-b" data-tilt data-tilt-max="10" data-tilt-speed="1000">
                                 <a href="#">
                                    <div class="service-card-hh">
                                       <div class="image-sr-mm">
                                          <img alt="custom-sport" src="images/service/app-develop.png" />
                                       </div>
                                       <div class="title-serv-c"><span>Custom</span> App Solution</div>
                                    </div>
                                 </a>
                              </div>
                              <div class="service-slide card-bg-c" data-tilt data-tilt-max="10" data-tilt-speed="1000">
                                 <a href="#">
                                    <div class="service-card-hh">
                                       <div class="image-sr-mm">
                                          <img alt="custom-sport" src="images/service/startup.png" />
                                       </div>
                                       <div class="title-serv-c"><span>Startup</span> Solution</div>
                                    </div>
                                 </a>
                              </div>
                              <div class="service-slide card-bg-d" data-tilt data-tilt-max="10" data-tilt-speed="1000">
                                 <a href="#">
                                    <div class="service-card-hh">
                                       <div class="image-sr-mm">
                                          <img alt="custom-sport" src="images/service/car-rental.png" />
                                       </div>
                                       <div class="title-serv-c"><span>Car</span> Rental Solution</div>
                                    </div>
                                 </a>
                              </div>
                              <div class="service-slide card-bg-e" data-tilt data-tilt-max="10" data-tilt-speed="1000">
                                 <a href="#">
                                    <div class="service-card-hh">
                                       <div class="image-sr-mm">
                                          <img alt="custom-sport" src="images/service/marketing.png" />
                                       </div>
                                       <div class="title-serv-c"><span>Marketing</span> Solution</div>
                                    </div>
                                 </a>
                              </div>
                              <div class="service-slide card-bg-f" data-tilt data-tilt-max="10" data-tilt-speed="1000">
                                 <a href="#">
                                    <div class="service-card-hh">
                                       <div class="image-sr-mm">
                                          <img alt="custom-sport" src="images/service/ewallet.png" />
                                       </div>
                                       <div class="title-serv-c"><span>e-Wallet</span> Solution</div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>



            {/*  </div>*/}
         </section>
         {/*  End Hero*/}

         <Courses />


         {/* Start Clients */}
         <section class="clients-section- bg-gradient15 pad-tb">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-8">
                     <div class="common-heading">
                        <span>Our happy customers</span>
                        <h2 class="mb30">Some of our Clients</h2>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-12">
                     <div class="clients-logos text-center col-12">
                        <ul class="row text-center clearfix">
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay=".2s">
                              <div class="brand-logo"><img src="images/client/clients-1.png" alt="clients" class="img-fluid" /></div>
                              <p>Shutter, USA</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay=".4s">
                              <div class="brand-logo"><img src="images/client/clients-2.png" alt="clients" class="img-fluid" /></div>
                              <p>Hipster, USA</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay=".6s">
                              <div class="brand-logo"><img src="images/client/clients-3.png" alt="clients" class="img-fluid" /></div>
                              <p>Happy, USA</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay=".8s">
                              <div class="brand-logo"><img src="images/client/clients-4.png" alt="clients" class="img-fluid" /></div>
                              <p>Opera Tours, USA</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="1s">
                              <div class="brand-logo"><img src="images/client/clients-5.png" alt="clients" class="img-fluid" /></div>
                              <p>Royale Stone, UK</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="1.2s">
                              <div class="brand-logo"><img src="images/client/clients-6.png" alt="clients" class="img-fluid" /></div>
                              <p>QTP, Australia</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="1.4s">
                              <div class="brand-logo"><img src="images/client/clients-7.png" alt="clients" class="img-fluid" /></div>
                              <p>PAPA, Malaysia</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="1.6s">
                              <div class="brand-logo"><img src="images/client/clients-8.png" alt="clients" class="img-fluid" /></div>
                              <p>Coffee, Australia</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="1.8s">
                              <div class="brand-logo"><img src="images/client/clients-9.png" alt="clients" class="img-fluid" /></div>
                              <p>Bakery, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="2s">
                              <div class="brand-logo"><img src="images/client/clients-10.png" alt="clients" class="img-fluid" /></div>
                              <p>Iconico, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="2.2s">
                              <div class="brand-logo"><img src="images/client/clients-11.png" alt="clients" class="img-fluid" /></div>
                              <p>Tom N Jerry, UK</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="2.4s">
                              <div class="brand-logo"><img src="images/client/clients-12.png" alt="clients" class="img-fluid" /></div>
                              <p>Arch, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="2.6s">
                              <div class="brand-logo"><img src="images/client/clients-13.png" alt="clients" class="img-fluid" /></div>
                              <p>Aro Group, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="2.8s">
                              <div class="brand-logo"><img src="images/client/clients-14.png" alt="clients" class="img-fluid" /></div>
                              <p>Tom Group, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="3s">
                              <div class="brand-logo"><img src="images/client/clients-4.png" alt="clients" class="img-fluid" /></div>
                              <p>Premier Pipes, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="3.2s">
                              <div class="brand-logo"><img src="images/client/clients-1.png" alt="clients" class="img-fluid" /></div>
                              <p>Dynamic, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="3.4s">
                              <div class="brand-logo"><img src="images/client/clients-7.png" alt="clients" class="img-fluid" /></div>
                              <p>Fns Inc, India</p>
                           </li>
                           <li class="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn" data-wow-delay="3.6s">
                              <div class="brand-logo"><img src="images/client/clients-2.png" alt="clients" class="img-fluid" /></div>
                              <p>RP School, India</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* End Clients */}

         {/* Start Badges */}
         <section class="badges-section bg-gradient5  pad-tb">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-8">
                     <div class="common-heading w-tdxt">
                        <span>WE MAKE RELATIONSHIPS</span>
                        <h2>Ranked as #1 Top Web & App Development Companies</h2>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".2s">
                     <div class="badges-content">
                        <img src="images/about/badges-a.png" alt="budges" class="img-fluid" />
                        <p>ABC DEF Industry Leader</p>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".4s">
                     <div class="badges-content">
                        <img src="images/about/badges-b.png" alt="budges" class="img-fluid" />
                        <p>Best eCommerce Development Company</p>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".6s">
                     <div class="badges-content">
                        <img src="images/about/badges-c.png" alt="budges" class="img-fluid" />
                        <p>ABC DEF High Performer Winner</p>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".8s">
                     <div class="badges-content">
                        <img src="images/about/badges-d.png" alt="budges" class="img-fluid" />
                        <p>Top App Developer 2019-20</p>
                     </div>
                  </div>
               </div>
               <div class="-cta-btn mt70">
                  <div class="free-cta-title v-center wow fadeInUp" data-wow-delay="1s">
                     <p>We <span>Promise.</span> We <span>Deliver.</span></p>
                     <a href="#" class="btn-main bg-btn2 lnk">Let's Work Together<i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                  </div>
               </div>
            </div>
         </section>

         {/* End Badges */}

         {/* Start work-category */}
         <section class="work-category pad-tb">
            <div class="container">
               <div class="row">
                  <div class="col-lg-4 v-center">
                     <div class="common-heading text-l">
                        <span>Industries we work for</span>
                        <h2>Helping Businesses in All Domains</h2>
                        <p>Successfully delivered digital products Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     </div>
                  </div>
                  <div class="col-lg-8">
                     <div class="work-card-set">
                        <div class="icon-set wow fadeIn" data-wow-delay=".2s">
                           <div class="work-card cd1">
                              <div class="icon-bg"><img src="images/icons/icon-1.png" alt="Industries" /></div>
                              <p>Social Networking</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay=".4s">
                           <div class="work-card cd2">
                              <div class="icon-bg"><img src="images/icons/icon-2.png" alt="Industries" /></div>
                              <p>Digital Marketing</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay=".6s">
                           <div class="work-card cd3">
                              <div class="icon-bg"><img src="images/icons/icon-3.png" alt="Industries" /></div>
                              <p>Ecommerce Development</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay=".8s">
                           <div class="work-card cd4">
                              <div class="icon-bg"><img src="images/icons/icon-4.png" alt="Industries" /></div>
                              <p>Video Service</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="1s">
                           <div class="work-card cd5">
                              <div class="icon-bg"><img src="images/icons/icon-5.png" alt="Industries" /></div>
                              <p>Banking Service</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="1.2s">
                           <div class="work-card cd6">
                              <div class="icon-bg"><img src="images/icons/icon-6.png" alt="Industries" /></div>
                              <p>Enterprise Service</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="1.4s">
                           <div class="work-card cd7">
                              <div class="icon-bg"><img src="images/icons/icon-7.png" alt="Industries" /></div>
                              <p>Education Service</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="1.6s">
                           <div class="work-card cd8">
                              <div class="icon-bg"><img src="images/icons/icon-8.png" alt="Industries" /></div>
                              <p>Tour and Travels</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="1.8s">
                           <div class="work-card cd9">
                              <div class="icon-bg"><img src="images/icons/icon-9.png" alt="Industries" /></div>
                              <p>Health Service</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="2s">
                           <div class="work-card cd10">
                              <div class="icon-bg"><img src="images/icons/icon-10.png" alt="Industries" /></div>
                              <p>Event & Ticket</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="2.2s">
                           <div class="work-card cd11">
                              <div class="icon-bg"><img src="images/icons/icon-11.png" alt="Industries" /></div>
                              <p>Restaurant Service</p>
                           </div>
                        </div>
                        <div class="icon-set wow fadeIn" data-wow-delay="2.4s">
                           <div class="work-card cd12">
                              <div class="icon-bg"><img src="images/icons/icon-12.png" alt="Industries" /></div>
                              <p>Business Consultant</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* End  work-category */}

         {/* Start Testinomial */}
         <section class="testinomial-section bg-none pad-tb">
            <div class="container">
               <div class="row justify-content-center ">
                  <div class="col-lg-8">
                     <div class="common-heading">
                        <span>What our clients say about Niwax.</span>
                        <h2>Over 1200+ Satisfied Clients and Growing</h2>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-6">
                     <div class="video-testimonials owl-carousel">
                        <div class="video-review" data-tilt data-tilt-max="5" data-tilt-speed="1000">
                           <a class="video-link" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0">
                              <img src="images/client/client-pic.jpg" alt="client" class="img-fluid" />
                              <div class="review-vid-details">
                                 <div class="-vid-ico"><span class="triangle-play2"></span></div>
                                 <p>Cina Cleaves</p>
                              </div>
                           </a>
                        </div>
                        <div class="video-review" data-tilt data-tilt-max="5" data-tilt-speed="1000">
                           <a class="video-link" href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0">
                              <img src="images/client/client-pic-a.jpg" alt="client" class="img-fluid" />
                              <div class="review-vid-details">
                                 <div class="-vid-ico"><span class="triangle-play2"></span></div>
                                 <p>Jokvch Marlin</p>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="owl-carousel testimonial-card-a pl25">
                        <div class="testimonial-card">
                           <div class="t-text">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           </div>
                           <div class="client-thumbs mt30">
                              <div class="media v-center">
                                 <div class="user-image bdr-radius"><img src="images/user-thumb/girl.jpg" alt="girl" class="img-fluid" /></div>
                                 <div class="media-body user-info v-center">
                                    <h5>Mike Smith</h5>
                                    <p>Business Owner, <small>Sydney, Australia</small></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="testimonial-card">
                           <div class="t-text">
                              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           </div>
                           <div class="client-thumbs mt30">
                              <div class="media v-center">
                                 <div class="user-image bdr-radius"><img src="images/user-thumb/girl.jpg" alt="girl" class="img-fluid" /></div>
                                 <div class="media-body user-info">
                                    <h5>Fred Chener</h5>
                                    <p>CEO of Aramxx, <small>Ohio, US State</small></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="testimonial-card">
                           <div class="t-text">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           </div>
                           <div class="client-thumbs mt30">
                              <div class="media v-center">
                                 <div class="user-image bdr-radius"><img src="images/user-thumb/girl.jpg" alt="girl" class="img-fluid" /></div>
                                 <div class="media-body user-info">
                                    <h5>Mathilda Burns</h5>
                                    <p>Backery Shop, <small>Tronto, Italy</small></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center">
                  <div class="col-lg-12">
                     <div class="review-ref mt100">
                        <div class="review-title-ref">
                           <h4>Read More Reviews</h4>
                           <p>Read our reviews from all over world.</p>
                        </div>
                        <div class="review-icons">
                           <a href="#" target="blank" class="wow fadeIn" data-wow-delay=".2s"><img src="images/about/reviews-icon-1.png" alt="review" class="img-fluid" /></a>
                           <a href="#" target="blank" class="wow fadeIn" data-wow-delay=".4s"><img src="images/about/reviews-icon-2.png" alt="review" class="img-fluid" /></a>
                           <a href="#" target="blank" class="wow fadeIn" data-wow-delay=".6s"><img src="images/about/reviews-icon-3.png" alt="review" class="img-fluid" /></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* End Testinomial */}

         {/* Start CTA */}
         <section class="cta-area pad-tb">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-8">
                     <div class="common-heading">
                        <span>Let's work together</span>
                        <h2>We Love to Listen to Your Requirements</h2>
                        <a href="javascript:void(0)" class="btn-outline">Estimate Project <i class="fas fa-chevron-right fa-icon"></i></a>
                        <p class="cta-call">Or call us now <a href="tel:+1234567890"><i class="fas fa-phone-alt"></i> (123) 456 7890</a></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="shape shape-a1"><img src="images/shape/shape-3.svg" alt="shape" /></div>
            <div class="shape shape-a2"><img src="images/shape/shape-4.svg" alt="shape" /></div>
            <div class="shape shape-a3"><img src="images/shape/shape-13.svg" alt="shape" /></div>
            <div class="shape shape-a4"><img src="images/shape/shape-11.svg" alt="shape" /></div>
         </section>
         {/* End CTA */}

         {/* Start Location */}
         <section class="our-office pad-tb">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-lg-8">
                     <div class="common-heading">
                        <span>Our Locations</span>
                        <h2>Our Office</h2>
                     </div>
                  </div>
               </div>
               <div class="row justify-content-center upset shape-numm">
                  <div class="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".2s">
                     <div class="office-card">
                        <div class="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
                           <img src="images/location/newyork.png" alt="New York" class="img-fluid" />
                        </div>
                        <div class="office-text">
                           <h4>New York</h4>
                           <p>603 FA Forest Avenue, New York, USA 10021</p>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-map-marker-alt"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-phone-alt"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-envelope"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fab fa-skype"></i></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".5s">
                     <div class="office-card">
                        <div class="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
                           <img src="images/location/sydeny.png" alt="sydney" class="img-fluid" />
                        </div>
                        <div class="office-text">
                           <h4>Sydney</h4>
                           <p>2449 Columbia Boulevard, Sydney, 10021</p>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-map-marker-alt"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-phone-alt"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-envelope"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fab fa-skype"></i></a>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".8s">
                     <div class="office-card mb0">
                        <div class="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
                           <img src="images/location/rome.png" alt="rome" class="img-fluid" />
                        </div>
                        <div class="office-text">
                           <h4>Rome</h4>
                           <p>9988 Piazzetta Scalette Rubiani 99, Rome, 84090</p>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-map-marker-alt"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-phone-alt"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fas fa-envelope"></i></a>
                           <a href="javascript:void(0)" target="blank" class="btn-outline rount-btn"><i class="fab fa-skype"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <script src="js/plugin.min.js"></script>
         {/* End Location*/}


      </div>
   );
}