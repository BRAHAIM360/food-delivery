/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './style.css'

function OnScroll({onScrollVisibal}) {
    // const onScrollClick=()=>{
    
    // }

    return (
        <>
        <a href="#home" class={onScrollVisibal ? "fas fa-angle-up active" :" fas fa-angle-up" } id="scroll-top"></a>
        </>
          )
}


export default OnScroll
