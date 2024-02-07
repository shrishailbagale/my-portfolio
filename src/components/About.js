// About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Shrishail, a passionate web developer with a love for creating
            meaningful and impactful web applications. My goal is to build
            user-friendly and visually appealing websites that provide a great
            user experience.
          </p>
          <p>
            I have experience in JAVA, PHP, HTML, CSS, JavaScript, React, Android, SQL and I
            enjoy staying updated with the latest trends in web development.
          </p>
          <p>
            Outside of coding, you can often find me hiking in the mountains, capturing moments through
            photography, and experimenting with new recipes in the kitchen. Whether it's a weekend
            camping trip or a quiet evening with a good book, I believe in finding inspiration beyond the screen.
          </p>

          <p>
            Feel free to explore my portfolio and get in touch if you have any questions or
            collaboration opportunities.
          </p>
        </div>
        <div className="about-image">
          <img src="/profile-image.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
