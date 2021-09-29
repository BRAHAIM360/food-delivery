import React from "react";
import "./style.css";

const Steps = [
  { img: "images/step-1.jpg", title: "choose your favorite food" },
  { img: "images/step-2.jpg", title: "free and fast delivery" },
  { img: "images/step-3.jpg", title: "easy payments methods" },
  { img: "images/step-4.jpg", title: "and finally, enjoy your foods" },
]



function WorkStep() {


  const redner_Steps = () => {

    return (Steps.map((step) => {

      return (<div className="box-steps" key={step.title}>
        <img className="steps-img" src={step.img} alt="" />
        <h3 className="steps-h3">{step.title}</h3>
      </div>)
    }))
  }

  return (
    <div className="step-container">

      <h1 className="heading">how it <span>works</span></h1>

      <section className="steps">

        {redner_Steps()}
       
      </section>

    </div>
  );
}

export default WorkStep;
