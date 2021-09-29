
import './App.css';
import NavBar from './components/navBar'
import React from 'react'
import Home from './components/home';
import Speciality from './components/speciality';
import Popular from './components/popular';
import WorkStep from './components/workStep';

function App() {
  return (
    <div>
<NavBar/>
<Home/>
<Speciality/>
<Popular/>
<WorkStep/>
   </div>
  );
}

export default App;
