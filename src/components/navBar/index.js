import React from 'react'
import './style.css'

function NavBar() {
    return (
        <div className="nav">
        
        <header>
        <div className='left-nav'>
        <a href="#" className="logo"><i className="fas fa-utensils"></i>food</a>
    
        <div id="menu-bar" className="fas fa-bars"></div>

        </div>
        <div className="right-nav">
        <nav className="navbar" >
            <a href="#home">home</a>
            <a href="#speciality">speciality</a>
            <a href="#popular">popular</a>
            <a href="#gallery">gallery</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
        </nav>
        </div>
    
    </header>
    
        </div>
    )
}


export default NavBar
