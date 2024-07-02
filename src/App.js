// App.js

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Certification from './components/Certification';
import Skills from './components/Skills';
import Hero from './components/Hero';
import Education from './components/Education';
import Navigation from './components/Navigation';

import './App.css';
const App = () => {
  return (      
    <Router>
      <div className="html">
        <Navigation/>  
        <Hero/>    
        <About/>         
        <Skills/>
        <Certification/>
        <Projects/>
        
        <Education/>
        <Contact/>   
        <Footer/>       
      </div>
    </Router>
  );
};

export default App;
