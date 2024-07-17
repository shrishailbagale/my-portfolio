// src/pages/Home.js
import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Hero from '../components/Hero';
import Certification from '../components/Certification';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
function Home() {
  return (
    <div>
        
      <main>      
        <Hero/>    
        <About/>         
        <Skills/>
        <Certification/>
        <Projects/>
        <Education/>
        <Contact/>      
         
        {/* You can add more components here */}
      </main>
      
      {/* Import your navigation component here */}
    </div>
  );
}

export default Home;
