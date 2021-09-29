
import './App.css';
import NavBar from './components/navBar'
import React from 'react'
import Home from './components/home';
import Speciality from './components/speciality';
import Popular from './components/popular';
import WorkStep from './components/workStep';
import Gallery from './components/gallery';
import Review from './components/review';
import Order from './components/order';
import Footer from './components/footer';

function App() {
  return (
    <div>
<NavBar/>
<Home/>
<Speciality/>
<Popular/>
<WorkStep/>
<Gallery/>
<Review/>
<Order/>
<Footer/>

   </div>
  );
}

export default App;
