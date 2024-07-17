// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Phonepe from './pages/Phonepe';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Whatsapp from './pages/Whatsapp';
const App = () => {
  return (      

    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/my-portfolio" component={Home} />
        <Route path="/phonepe" component={Phonepe} />
        <Route path="/whatsapp" component={Whatsapp} />
        <Route path="/hero" component={Hero} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
      
    </Router>
    // <Router> 
    //   <div className="html">
    //     <Navigation/>  
    //     <Hero/>    
    //     <About/>         
    //     <Skills/>
    //     <Certification/>
    //     <Projects/>
        
    //     <Education/>
    //     <Contact/>   
    //     <Footer/>       
    //   </div>
    //</Router>
  );
};

export default App;
