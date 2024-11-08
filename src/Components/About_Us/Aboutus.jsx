import React from "react";
import Sidebar from "../Side_Bar/Sidebar";

export default function Aboutus(){
  return(
    <>

<Sidebar />

      {/* why choose */}
      <section class="hero-card-web-aboutus bg-gradient12 shape-bg3"> </section>
      <div class="hero-card-web-about-us bg-gradient12 shape-bg3">
</div>
      <section class="why-choos-lg pad-tb deep-dark">
         <div class="container">
            <div class="row">
               <div class="col-lg-6">
                  <div class="common-heading text-l">
                     <span>Why Choose Us</span>
                     <h2 class="mb20">Why The Niwax <span class="text-second text-bold">Ranked Top</span> Among The Leading Web & App Development Companies</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                     <div class="itm-media-object mt40 tilt-3d">
                        <div class="media">
                           <div class="img-ab- base" data-tilt data-tilt-max="20" data-tilt-speed="1000"><img src="images/icons/computers.svg" alt="icon" class="layer"/></div>
                           <div class="media-body">
                              <h4>Streamlined Project Management</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                           </div>
                        </div>
                        <div class="media mt40">
                           <div class="img-ab- base" data-tilt data-tilt-max="20" data-tilt-speed="1000"><img src="images/icons/worker.svg" alt="icon" class="layer"/></div>
                           <div class="media-body">
                              <h4>A Dedicated Team of Experts</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                           </div>
                        </div>
                        <div class="media mt40">
                           <div class="img-ab- base" data-tilt data-tilt-max="20" data-tilt-speed="1000"> <img src="images/icons/deal.svg" alt="icon" class="layer"/></div>
                           <div class="media-body">
                              <h4>Completion of Project in Given Time</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper. Mauris aliquet egestas metus.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div  data-tilt data-tilt-max="5" data-tilt-speed="1000" class="single-image bg-shape-dez wow fadeIn" data-wow-duration="2s"><img src="images/about/about-company.jpg" alt="image" class="img-fluid"/></div>
                  <p class="text-center mt30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <div class="cta-card mt60 text-center">
                     <h3 class="mb20">Let's Start a  <span class="text-second text-bold">New Project</span> Together</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.</p>
                     <a href="#" class="niwax-btn1 mt30"><span>Request A Quote <i class="fas fa-chevron-right fa-icon"></i></span></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* End why choose */}
      {/* Start Portfolio */}
      <section class="portfolio-section pad-tb">
         <div class="container">
            <div class="row justify-content-center ">
               <div class="col-lg-8">
                  <div class="common-heading">
                     <span>Our Work</span>
                     <h2 class="mb0">Our Latest Creative Work</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-8 col-sm-8 mt60 wow fadeInUp" data-wow-delay="0.2s">
                  <div class="isotope_item hover-scale">
                     <div class="item-image" data-tilt data-tilt-max="2" data-tilt-speed="1000">
                        <a href="#"><img src="images/portfolio/image-d.jpg" alt="image" class="img-fluid" /> </a>
                     </div>
                     <div class="item-info">
                        <h4><a href="#">Ecommerce Development</a></h4>
                        <p>Web Application</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-sm-4 mt60 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="isotope_item hover-scale">
                     <div class="item-image" data-tilt data-tilt-max="2" data-tilt-speed="1000">
                        <a href="#"><img src="images/portfolio/image-1.jpg" alt="image" class="img-fluid" /> </a>
                     </div>
                     <div class="item-info">
                        <h4><a href="#">Creative App</a></h4>
                        <p>iOs, Android</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-sm-4 mt60 wow fadeInUp" data-wow-delay="0.6s">
                  <div class="isotope_item hover-scale">
                     <div class="item-image" data-tilt data-tilt-max="2" data-tilt-speed="1000">
                        <a href="#"><img src="images/portfolio/image-6.jpg" alt="image" class="img-fluid" /> </a>
                     </div>
                     <div class="item-info">
                        <h4><a href="#">Brochure Design</a></h4>
                        <p>Graphic, Print</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-8 col-sm-8 mt60 wow fadeInUp" data-wow-delay="0.8s">
                  <div class="isotope_item hover-scale">
                     <div class="item-image" data-tilt data-tilt-max="2" data-tilt-speed="1000">
                        <a href="#"><img src="images/portfolio/image-c.jpg" alt="image" class="img-fluid" /> </a>
                     </div>
                     <div class="item-info">
                        <h4><a href="#">Icon Pack</a></h4>
                        <p>iOs, Android</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* End Portfolio */}

       


    </>
  );
}