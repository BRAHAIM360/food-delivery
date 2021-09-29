import React, { useState } from 'react'
import './style.css'

function NavBar() {
    const [menuClicked, setmenuClicked] = useState(false)
    const onClickMenur=()=>{
        setmenuClicked(!menuClicked)
    }
    return (
        <div className="nav">
        
        <header>
            
        <div className="left">
       <div><img src="global.svg"/> EN</div>
        <a href="#" className="logo"><i className="fas fa-utensils " ></i>food</a>
        </div>
        <div id="menu-bar" onClick={()=>onClickMenur()} className={menuClicked ?"fas fa-bars fa-times" :  "fas fa-bars"}></div>

       
       
        <nav className= {menuClicked ? "navbar active": "navbar " } >
            <a href="#home">home</a>
            <a href="#speciality">speciality</a>
            <a href="#popular">popular</a>
            <a href="#gallery">gallery</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
        </nav>
      
    
    </header>
    
        </div>
    )
}


export default NavBar
