import React from 'react';
import './About.css';
import aboutIcon from '../images/about-icon.png';
import aboutimage from '../images/my-photo.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text-content">
          <div className="section-heading-wrapper">
            <img src={aboutIcon} alt="Icon" className="section-icon" />
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </div>
          <div className="about-body">
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
          <a href="https://linkedin.com/in/shrishailbagale" target="_blank" rel="noopener noreferrer" className="resume-btn">
            Download Resume
          </a>
        </div>
        <div className="about-image-wrapper">
          <div className="image-frame">
            <img src={aboutimage} alt="Shrishail Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
