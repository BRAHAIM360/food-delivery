import React from 'react'
import './style.css'

function DishesCard({img,title}) {
  
    return (
        <div className="box">
        <img className="image" src={img} alt=""/>
        <div className="content">
            <img src="images/s-1.png" alt=""/>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
        </div>  
        </div>
          )
}


export default DishesCard
