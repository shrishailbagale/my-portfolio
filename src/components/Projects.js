// Projects.js

import React from 'react';
import './Projects.css';
import projectIcon from '../images/peoject-icon.png';

const Projects = () => {
  const projectData = [
    {
      title: 'WhatsApp Clone',
      description: 'The WhatsApp clone project aims to develop a real-time messaging application that mirrors the functionality of WhatsApp, allowing users to send and receive text messages, images, videos, and other multimedia content.',
      image: `${process.env.PUBLIC_URL}/project-images/whatsapp-clone.png`, // Replace with the actual image path
    },
    {
      title: 'Event Management System',
      description: 'The Event Management System is a comprehensive solution designed to streamline and automate the planning, organization, and coordination of events. Whether its conferences, weddings, concerts, or corporate meetings, this system facilitates efficient management of all aspects of event planning, from initial scheduling to post-event analysis.',
      image: `${process.env.PUBLIC_URL}/project-images/Event_booking.png`, // Replace with the actual image path
    },
    {
      title: 'Online Book Store',
      description: 'The Online Book Store project is a web application that enables users to browse, search, and purchase books online. It provides a convenient platform for both book enthusiasts and sellers, allowing users to explore a diverse range of books, make purchases, and manage their accounts seamlessly.',
      image: 'project-images/whatsapp-clone.jpg', // Replace with the actual image path
    },
    {
      title: 'Library Management System',
      description: 'The Library Management System is a comprehensive software solution designed to efficiently manage the operations of a library. It provides a centralized platform for librarians to organize book collections, handle user transactions, and streamline library processes.',
      image: '/library-management.jpg', // Replace with the actual image path
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects fade-in">
      <div className="heading-container">
        <img src={projectIcon} alt="Icon" className="icon" />
        <h2 className='heading'>Projects <span>Made</span></h2>
      </div>
      <p className="description">Explore some of the projects I've worked on.</p>

      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href="#" className="read-more-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
