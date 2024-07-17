// src/pages/Phonepe.js
import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ModalImage from "react-modal-image";
import '../styles/Phonepe.css'; // Create this CSS file for custom styles
import Video from '../videos/Phonepe-Video.mp4';
//import Image1 from '../images/DHB_Soni_college.jpg';

const Phonepe = () => {
    const images = [
      'path-to-image1.jpg',
      'path-to-image2.jpg',
      'path-to-image3.jpg',
      // Add more image paths here
    ];
  
    return (
      <div className="project-container">
        <motion.div
          className="project-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>PhonePe</h1>
        </motion.div>
  
        <motion.div
          className="project-details"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2>Technologies:</h2>
          <p>Java, Android SDK, XML, Firebase</p>
          <h2>Tools:</h2>
          <p>Android Studio, Git, Docker</p>
          <h2>Description:</h2>
          <p>
            Developed a PhonePe clone app, implementing features such as payment processing, user authentication, and transaction history. Utilized Firebase for real-time database and authentication, ensuring secure and efficient data management.
          </p>
        </motion.div>
  
        <motion.div
          className="download-button-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button className="download-button">Download App</button>
        </motion.div>
  
        <motion.div
          className="video-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h2>Preview Video:</h2>
          <video controls width="250">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
  
        <motion.div
          className="gallery-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <h2>Image Gallery:</h2>
          <div className="gallery">
            {images.map((image, index) => (
              <div key={index} className="gallery-image">
                <ModalImage
                  small={image}
                  large={image}
                  alt={`Screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default Phonepe;