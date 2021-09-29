import React from 'react'
import GalleryCard from '../gallery_card'
import './style.css'

const galleryItems=[
    { img: "images/g-1.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-2.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-3.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-4.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-5.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-6.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-7.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },
    { img: "images/g-8.jpg", title: "tasty burger",desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum." },    
    
]

function Gallery() {
    const rednerGallery=()=>{
        return( galleryItems.map((Dishe)=>{
            return <GalleryCard key={Dishe.title} img={Dishe.img} title={Dishe.title} desc={Dishe.desc}  />
            
        }))
    }

    return (
        <section className="gallery" id="gallery">

        <h1 className="heading"> our food <span> gallery </span> </h1>
    
        <div className="box-container">
    {rednerGallery()}
    
        </div>
    
    </section>
          )
}


export default Gallery
