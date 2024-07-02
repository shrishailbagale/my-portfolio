import React from "react";
import "./Projects.css";
import projectIcon from "../images/peoject-icon.png";


const Projects = () => {
  const projectData = [
    {
      title: "WhatsApp Application",
      description:
        "The WhatsApp clone project aims to develop a real-time messaging application that mirrors the functionality of WhatsApp, allowing users to send and receive text messages, images, videos, and other multimedia content.",
      image: `${process.env.PUBLIC_URL}/project-images/whatsapp-Splash-Screen.jpg`,
      link: `${process.env.PUBLIC_URL}/project-images/`,
    },
    {
      title: "Phonepe Application",
      description:
        "The PhonePe clone app is a digital payments solution enabling secure UPI transactions, bank account management, and loan applications. It features credit profile tracking, account aggregation, and credit card management, offering a user-friendly interface for efficient financial management.",
      image: `${process.env.PUBLIC_URL}/project-images/Phonepe-Splash-Screen.png`,
      link: `${process.env.PUBLIC_URL}/project-images/Phonepe-Video.mp4`,
    },
    {
      title: "Online Book Store",
      description:
        "The Online Book Store project is a web application that enables users to browse, search, and purchase books online. It provides a convenient platform for both book enthusiasts and sellers, allowing users to explore a diverse range of books, make purchases, and manage their accounts seamlessly.",
      image: `${process.env.PUBLIC_URL}/project-images/online-book-store.png`,
      link: `${process.env.PUBLIC_URL}/project-images/`,
    },
    {
      title: "Event Management System",
      description:
        "The Event Management System is a comprehensive solution designed to streamline and automate the planning, organization, and coordination of events. Whether its conferences, weddings, concerts, or corporate meetings, this system facilitates efficient management of all aspects of event planning, from initial scheduling to post-event analysis.",
      image: `${process.env.PUBLIC_URL}/project-images/Event_booking.png`,
      link: `${process.env.PUBLIC_URL}/project-images/`,
    },
    
  ];

  return (
    <section className="projects fade-in" id="project">
      <div className="heading-container">
        <img src={projectIcon} alt="Icon" className="icon" />
        <h2 className="heading">
          Projects <span>Made</span>
        </h2>        
      </div>
      <p className="description">
        Explore some of the projects I've worked on.
      </p>
      

      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div class="card-footer">
            <a href={project.link} class="read-more-btn">View More &gt;&gt;</a>
        </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
