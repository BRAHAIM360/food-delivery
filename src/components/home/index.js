import React from 'react'
import './style.css'

function Home() {
  
    return (
        <section className="home" id="home">

        <div className="content">
            <h3>food made with love</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
            <a className="btn">order now</a>
        </div>
    
        <div className="image">
            <img src="/images/home-img.png" />
        </div>
    
    </section>
    )
}


export default Home
