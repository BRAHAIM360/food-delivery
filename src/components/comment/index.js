import React from "react";
import "./style.css";

function Comment({img,user,comment,stars}) {

    const renderStarsReview=(stars)=>{
         return  [...Array(5)].map((e, i) =>  i<stars ? <i className="fas fa-star"></i> :  <i className="far fa-star"></i> )   
    }

  return (
    <div className="comment">
      <img src={img} alt="" />
      <h3>{user}</h3>
      <div className="stars">
      { renderStarsReview(stars)}
      </div>
      <p>
       {comment}
      </p>
    </div>
  );
}

export default Comment;
