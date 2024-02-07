// Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects fade-in">
      <h2>My Projects</h2>
      <p>Explore some of the projects I've worked on.</p>

      <div className="project-cards">
        <div className="project-card">
          <h3 className="project-title">WhatsApp Clone</h3>
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Event Management System</h3>
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Online Book Store</h3>
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="project-card">
          <h3 className="project-title">Library Management System</h3>
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
