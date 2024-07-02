// About.js

import React from 'react';
import './About.css';
import aboutIcon from '../images/about-icon.png';
import aboutimage from '../images/my-photo.png';

// import resumePdf from '../path-to-your-resume.pdf'; // Replace with the actual path to your resume PDF file

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about-content">
        <div className="about-text">
          <div className="heading-container">
            <img src={aboutIcon} alt="Icon" className="icon" />
            <h2 className="heading">About <span>Me</span></h2>
          </div>
          <div className="animate__animated animate__bounceInRight animate__delay-0s">
          <p>
            Hello! I'm <strong>Shrishail</strong>, a passionate web developer with a love for creating
            meaningful and impactful web applications. My goal is to build
            user-friendly and visually appealing websites that provide a great
            user experience.
          </p>
          <p>
            I have experience in JAVA, PHP, HTML, CSS, JavaScript, React, Android, SQL, and I
            enjoy staying updated with the latest trends in web development.
          </p>

          <p>
            Feel free to explore my portfolio and get in touch if you have any questions or
            collaboration opportunities.
          </p>

          </div>
          {/* Resume download button */}
          <a href="https://linkedin.com/in/shrishailbagale" className="resume-button">
            Download Resume
          </a>
        </div>
        <div className="about-image">
          <img src={aboutimage} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
