
import './App.css'
import Navbar from './components/navbar'
import {BrowserRouter, Link} from "react-router-dom";
import { Router,Route,Routes } from 'react-router-dom';

import Home from './components/homepage/home';

import About from './components/homepage/about';
import Work from './components/homepage/work';
import End from './components/end';
import Certificate from './components/Certificate';
import { useState } from 'react';
function App() {
 
let [theme,settheme]=useState("light");

  return (

    <BrowserRouter>
    <Navbar theme={theme} settheme={settheme}></Navbar>
     <Routes>
  
   <Route  exact path="/" element={ <Home/>}></Route>
   <Route   path="/projects" element={ <Work theme={theme}/>}></Route>
     <Route   path="/about" element={ <About theme={theme} settheme={settheme}/>}></Route>
       <Route   path="/certificate" element={ <Certificate/>}></Route>
    </Routes>
    <End></End>
    </BrowserRouter>
    
  )
}

export default App
