import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Hero.css";
import profileImage from "../images/profile-image.jpg"; 
import icGithub from "../logos/github.png";
import icLinkedin from "../logos/linkedin.png";
import icInstagram from "../logos/instagram.png";

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: [
        ".NET Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Android Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(".typing-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="profile-img-wrapper">
          <img src={profileImage} alt="Shrishail Bagale" className="profile-image" />
        </div>
        <h1 className="name">
          Shrishail <span className="highlight">Bagale</span>
        </h1>
        <h3 className="sub-heading">
          I'm <span className="typing-text"></span>
        </h3>

        <div className="social-icons">
          <a href="https://github.com/shrishailbagale" target="_blank" rel="noopener noreferrer" className="icon-link github">
            <img src={icGithub} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/shrishailbagale" target="_blank" rel="noopener noreferrer" className="icon-link linkedin">
            <img src={icLinkedin} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/shrishail_bagale" target="_blank" rel="noopener noreferrer" className="icon-link instagram">
            <img src={icInstagram} alt="Instagram" />
          </a>
        </div>
        
        <a href="#about" className="cta-button">Explore More</a>
      </div>
    </section>
  );
};

export default Hero;
