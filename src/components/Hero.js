// Hero.js
import React from 'react';
import './Hero.css'; // Import your styles
import { useEffect } from 'react';
import Typed from 'typed.js';
import profileImage from '../images/profile-image.jpg'; // Adjust the path to your image
import icGithub from '../logos/github.png';
import icLinkedin from '../logos/linkedin.png';
import icInstagram from '../logos/instagram.png';
import './Navigation.js'; // Export your navigation 

const Hero = () => {

    useEffect(() => {
        // Initialize Typed.js
        const options = {
          strings: ["Web Developer", "Frontend Developer", "Backend Developer", "Android Developer"],
          typeSpeed: 50, // Adjust typing speed as needed
          backSpeed: 30, // Adjust backspacing speed as needed
          loop: true, // Set to false if you don't want the loop
        };
    
        const typed = new Typed('.typing-text', options);
    
        // Cleanup the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []);
    
  return (
    <section className="hero-container">
  
      <div className="hero-content">
        <img src={profileImage} alt="Shrishail Bagale" className="profile-image" />
        <h1>Shrishail <span>Bagale</span></h1>
        <p>I'm <span className="typing-text"></span></p>

        {/* Add social media logos with links */}
        
        <div className="social-icons">
        <a href="https://github.com/shrishailbagale" target="_blank" rel="noopener noreferrer">
            <img src={icGithub} alt="GitHub" />
        </a>
        {/* Add similar blocks for other social media logos */}
        <a href="https://linkedin.com/in/shrishailbagale" target="_blank" rel="noopener noreferrer">
            <img src={icLinkedin} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/shrishailbagale" target="_blank" rel="noopener noreferrer">
            <img src={icInstagram} alt="Instagram" />
        </a>
        {/* Add more social media icons as needed */}
        </div>

       
        {/* Add a call-to-action button or link if desired */}
        <a href="#your-section-id" className="cta-button">
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Hero;
