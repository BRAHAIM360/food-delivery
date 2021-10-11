import React from "react";
import "./style.css";

function Loading({fadeOut}) {

   

  return (
    //<!-- loader  -->
<div class={fadeOut ? "fade-out  loader-container" :" loader-container" } >
    <img src="images/loader.gif" alt=""/>
</div>


  );
}

export default Loading;
