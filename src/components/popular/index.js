import React from 'react'
import DishesCardPrice from '../dishesCardPrice'
import './style.css'


const Speciality_Dishes = [
    { img: "images/p-1.jpg", title: "tasty burger",price:"7DA - 10DA" },
    { img: "images/p-2.jpg", title: "tasty pizza" ,price:"5DA - 20DA"},
    { img: "images/p-3.jpg", title: "cold ice-cream",price:"6DA - 24DA" },
    { img: "images/p-4.jpg", title: "cold drinks" ,price:"7DA - 20DA"},
    { img: "images/p-5.jpg", title: "tasty sweets",price:"8DA - 23DA" },
    { img: "images/p-6.jpg", title: "healty breakfast" ,price:"3DA - 20DA"},
    { img: "images/p-3.jpg", title: "cold ice-creamm",price:"6DA - 24DA" },
    
    
  ]
  

function Popular() {
    const redner_Dishes=()=>{
        return( Speciality_Dishes.map((Dishe)=>{
            return <DishesCardPrice key={Dishe.title} img={Dishe.img} title={Dishe.title} price={Dishe.price}  />
            
        }))
    }
    

    return (


<section className="popular" id="popular">

    <h1 className="heading"> most <span>popular</span> foods </h1>

    <div className="CardPrice">

        {redner_Dishes()}

    </div>

</section>

)
}



export default Popular