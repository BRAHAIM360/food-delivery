import React from "react";
import "./style.css";

function Footer() {

   function openInNewTab(url) {
      window.open(url, '_blank').focus();
     }
     

    return (
      
<section class="footer">


<div class="wrapper share">
         <div onClick={()=>openInNewTab("https://web.facebook.com/brahim.madrido/")} class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div class="button"  onClick={()=>openInNewTab("https://twitter.com/Aek360")}>
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div class="button"  onClick={()=>openInNewTab("https://www.instagram.com/brahim.360/")}>
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div class="button"  onClick={()=>openInNewTab("https://www.linkedin.com/in/brahim-mahioussi-4b2920111/")}>
            <div class="icon">
               <i class="fab fa-linkedin" ></i>
            </div>
            <span>Linkedin</span>
         </div>
         <div class="button"  onClick={()=>openInNewTab("https://www.youtube.com/channel/UChzCBkBgOQbyVwNvdvkhUEg")}>
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
         </div> 
</section>

  );
}

export default Footer;
