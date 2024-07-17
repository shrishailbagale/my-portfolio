// src/pages/Whatsapp.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ModalImage from 'react-modal-image';
import '../styles/Whatsapp.css';

const Whatsapp = () => {
  const images = [
    '/images/whatsapp/image1.jpg',
    '/images/whatsapp/image2.jpg',
    '/images/whatsapp/image3.jpg',
    // Add more image paths here
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="project-container">
      <motion.div
        className="project-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>WhatsApp Clone Project</h1>
      </motion.div>

      <motion.div
        className="project-details"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2>Technologies:</h2>
        <p>Java, Android, XML, Firebase</p>
        <h2>Tools:</h2>
        <p>Android Studio</p>
        <h2>Description:</h2>
        <p>
          Created a WhatsApp clone as part of my MCA coursework. Implemented features like real-time messaging, media sharing, and user authentication using Firebase.
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
        <video controls width="600">
          <source src="/videos/whatsapp-preview.mp4" type="video/mp4" />
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

      {isOpen && (
        <ModalImage
          large={images[photoIndex]}
          alt={`Screenshot ${photoIndex + 1}`}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Whatsapp;
