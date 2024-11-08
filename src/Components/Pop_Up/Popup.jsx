import React from "react";

export default function Popup(){
  return(
    <div>
          {/* lead generaton popup start */}
<div className="modal leadpopup" id="leadModal">
   <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">      
       <div className="modal-body">
         <div className="innerbody">
           <div className="innerleft">
            <div className="leadbtnclose"> <button type="button" className="btn-close" data-bs-dismiss="modal"></button></div>
              <h3>Build Your App in just 2 Weeks</h3>
              <p className="mt10">Leave your details and one of our experts will contact you soon</p>             
               <div className="form-block mt20">
                  <form action="#" id="quotes-form" method="post">
                     <div className="fieldsets row">
                        <div className="col-md-12 form-group floating-label">
                           <input type="text" placeholder=" " required="required" className="floating-input"/>
                           <label>Full Name*</label>
                        </div>
                        <div className="col-md-12 form-group floating-label">
                           <input type="email" placeholder=" " required="required" className="floating-input"/>
                           <label>Email Address*</label>
                        </div>
                     </div>
                     <div className="fieldsets row">
                        <div className="col-md-12 form-group floating-label">
                           <input type="tel" placeholder=" " required="required" className="floating-input"/>
                           <label>Mobile Number*</label>
                        </div>                        
                     </div>
                     <div className="fieldsets mt20"> <button type="submit" name="submit" className="lnk btn-main bg-btn">Submit <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></button> </div>
                     <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.</p>
                  </form>
               </div>              
           </div>
           <div className="innerright" data-background="images/service/mockup-app.jpg"></div>
         </div>         
       </div>      
     </div>
   </div>
 </div>
 
 {/* lead generaton popup end */}
    </div>
  );
}