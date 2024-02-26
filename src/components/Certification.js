// Certification.js

import React, { useEffect } from 'react';
import './Certification.css';
import certificateIcon from '../images/certificate-icon.png';

const Certification = () => {
  useEffect(() => {
    // Add the 'animate' class to each certification card after a delay
    const cards = document.querySelectorAll('.certification-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 200); // Adjust the delay as needed
    });
  }, []);

  return (
    <section className="certification">
      <div className="heading-container">
        <img src={certificateIcon} alt="Icon" className="icon" />      
        <h2 className="heading">My <span>Certifications</span></h2>
      </div>
      <p className="description">Explore my certifications and achievements.</p>

      <div className="certification-cards">
        <div className="certification-card">
          <img src={process.env.PUBLIC_URL + '/certification-images/complete_java_cource.jpg'} alt="Complete Java Certification Cource" />
          <h3 href="https://udemy-certificate.s3.amazonaws.com/image/UC-2c93b2e9-058b-4d57-ad1a-08010cf5b722.jpg">Complete Java Certification Cource</h3>
          <p>Issued by: Udemy</p>
        </div>

        <div className="certification-card">
          <img src={process.env.PUBLIC_URL + '/certification-images/Full_stack_java_development.jpg'} alt="Full Stack Java Development" />
          <h3>Full Stack Java Development</h3>
          <p>Issued by: SimpliLearn</p>
        </div>

        <div className="certification-card">
          <img src={process.env.PUBLIC_URL + '/certification-images/Java_certificate.jpg'} alt="Java Programming" />
          <h3>Java Programming</h3>
          <p>Issued by: Great Learning</p>
        </div>

        {/* Add more certification cards as needed */}
      </div>
    </section>
  );
};

export default Certification;
