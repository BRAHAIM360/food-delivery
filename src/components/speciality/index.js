import React from "react";
import DishesCard from "../dishesCard";
import "./style.css";

const Speciality_Dishes = [
  { img: "images/s-img-1.jpg", title: "tasty burger" },
  { img: "images/s-img-2.jpg", title: "tasty pizza" },
  { img: "images/s-img-3.jpg", title: "cold ice-cream" },
  { img: "images/s-img-4.jpg", title: "cold drinks" },
  { img: "images/s-img-5.jpg", title: "tasty sweets" },
  { img: "images/s-img-6.jpg", title: "healty breakfast" },
]

function Speciality() {
    const redner_Dishes=()=>{
       
        return( Speciality_Dishes.map((Dishe)=>{
            return <DishesCard img={Dishe.img} title={Dishe.title} />
            
        }))
    }
    
    return (
    <section className="speciality" id="speciality">
      <h1 className="heading">
        {" "}
        our <span>speciality</span>{" "}
      </h1>

      <div class="box-container">
         {redner_Dishes()}
    

        <div className="box">
          <img className="image" src="images/s-img-6.jpg" alt="" />
          <div className="content">
            <img src="images/s-6.png" alt="" />
            <h3>healty breakfast</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              inventore neque amet ipsa tenetur voluptates aperiam tempore
              libero labore aut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speciality;
