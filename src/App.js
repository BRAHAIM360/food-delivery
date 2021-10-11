import "./App.css";
import NavBar from "./components/navBar";
import React, { useEffect, useState } from "react";
import Home from "./components/home";
import Speciality from "./components/speciality";
import Popular from "./components/popular";
import WorkStep from "./components/workStep";
import Gallery from "./components/gallery";
import Review from "./components/review";
import Order from "./components/order";
import Footer from "./components/footer";
import Loading from "./components/loading";
import OnScroll from "./components/onScroll";
import useScrollPosition from '@react-hook/window-scroll'


function App() {
  const scrollY = useScrollPosition(60 )
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loader-container").classList.add("fade-out");
    }, 4000);
  }, []);


  return (
   <div>
          <Loading  />
        {scrollY>60 ?<OnScroll onScrollVisibal={true}/> :<OnScroll onScrollVisibal={false}/> }
         <NavBar />
          <Home />
          <Speciality />
          <Popular />
          <WorkStep />
          <Gallery />
          <Review />
          <Order />
          <Footer />
        </div>
     
  );
}

export default App;
