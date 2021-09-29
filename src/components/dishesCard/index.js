import React from 'react'
import './style.css'

function DishesCard({img,title,icon}) {
  
    return (
        <div className="box">
        <img className="image" src={img} alt=""/>
        <div className="content">
            <img src={icon} alt=""/>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>  
        </div>
          )
}


export default DishesCard
