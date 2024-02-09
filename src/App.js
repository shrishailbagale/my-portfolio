// App.js

import React from 'react';
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import EducationalDetails from './components/EducationalDetails';
import Certification from './components/Certification';
import Skills from './components/Skills';

const App = () => {
  return (      
    <Router>
      <div>
        <Header/>        
        <Navigation/>
        <About/>
        <Certification/>
        <Projects/>
        <Skills/>
        <EducationalDetails/>          
        <Contact/>    

        <Footer/>       
      </div>
    </Router>
  );
};

export default App;
