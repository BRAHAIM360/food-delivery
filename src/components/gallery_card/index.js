import React from 'react'
import './style.css'



function GalleryCard({img,title,desc}) {
  
    return (
        <div className="GalleryCard">
            <img src={img} alt="" />
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a className="btn">ordern now</a>
            </div>
        </div>
          )
}


export default GalleryCard
