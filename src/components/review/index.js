import React from 'react'
import './style.css'
import Comment from "../comment"

const comments = [
    { img: "images/profile/1.jpg", user: "Oued-mesoud Amina",stars:5 ,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem." },
    { img: "images/profile/2.jpg", user: "Ghoumrassi Rima" ,stars:2 ,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem."},
    { img: "images/profile/6.jpeg", user: "Ait Abdelakder Malik",stars:5 ,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem." },
    { img: "images/profile/4.jpg", user: "Belakhedar Hanane",stars:4 ,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem." },
    { img: "images/profile/5.jpg", user: "Mesbah Yacine",stars:5 ,comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem." },
   
    
    
  ]
  

function Review() {
    const redner_review=()=>{
        return( comments.map((comment)=>{
            return <Comment key={comment.user} img={comment.img} user={comment.user} comment={comment.comment} stars={comment.stars} />
            
        }))
    }
    

    return (


<section className="popular" id="popular">

    <h1 className="heading"> most <span>popular</span> foods </h1>

    <div className="CardPrice">

        {redner_review()}

    </div>

</section>

)
}



export default Review