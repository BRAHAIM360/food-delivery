import React from 'react'
import './style.css'

function DishesCardPrice({img,title,price}) {
  
    return (
        <div className="box">
            <span className="price">{price}</span>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a className="btn">order now</a>
        </div>
          )
}


export default DishesCardPrice
