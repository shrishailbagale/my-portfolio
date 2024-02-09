

// EducationalDetails.js

import React, { useEffect } from 'react';
import './EducationalDetails.css';

const EducationalDetails = () => {
  useEffect(() => {
    // Add the 'animate' class to each education card after a delay
    const cards = document.querySelectorAll('.education-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, index * 200); // Adjust the delay as needed
    });
  }, []);

  return (
    <section className="educational-details">
      <h2>My Education</h2>
      <p>Explore my academic journey and qualifications.</p>

      <div className="education-cards">
        <div className="education-card">
          <h3>Savitribai Phule Pune University (SPPU)</h3>
          <p>Degree: Master of Computer Application (MCA) in Computer Application</p>
          <p>Year of Post-Graduation: 2023</p>
        </div>

        <div className="education-card">
        <h3>Punyashlok Ahilyadevi Holkar University, Solapur</h3>
        <p>Degree: Bachelor ofComputer Science (BCS) in Computer Science</p>
        <p>Year of Graduation: 2021</p>
      </div>

        {/* <div className="education-card">
          <h3>Lokseva Junior College, Mandrup</h3>
          <p>HSC (12th)</p>
          <p>Year of Completed: 2018</p>
        </div>

        <div className="education-card">
          <h3>Shree Panchakshari High School, Malkavathe</h3>
          <p>SSC (10th) </p>
          <p>Year of Completed: 2016</p>
        </div> */}
      </div>
    </section>
  );
};

export default EducationalDetails;

