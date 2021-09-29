
import './App.css';
import NavBar from './components/NavBar'
import React from 'react'
import Home from './components/home';
import Speciality from './components/speciality';
import Popular from './components/popular';

function App() {
  return (
    <div>
<NavBar/>
<Home/>
<Speciality/>
<Popular/>
   </div>
  );
}

export default App;
