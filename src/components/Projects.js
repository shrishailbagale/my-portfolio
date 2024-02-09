// Projects.js

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'WhatsApp Clone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: `${process.env.PUBLIC_URL}/project-images/whatsapp-clone.png`, // Replace with the actual image path
    },
    {
      title: 'Event Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: `${process.env.PUBLIC_URL}/project-images/Event_booking.png`, // Replace with the actual image path
    },
    {
      title: 'Online Book Store',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project-images/whatsapp-clone.jpg', // Replace with the actual image path
    },
    {
      title: 'Library Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/library-management.jpg', // Replace with the actual image path
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects fade-in">
      <h2>My Projects</h2>
      <p>Explore some of the projects I've worked on.</p>

      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
