import React from 'react'
import './style.css'

function DishesCardPrice({img,title,price}) {
  
    return (
        <div class="box">
            <span class="price">{price}</span>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <a href="#" class="btn">order now</a>
        </div>
          )
}


export default DishesCardPrice
