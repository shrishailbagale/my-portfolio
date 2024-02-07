// Skills.js

import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    // Add the 'animate' class to each skill after a delay
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
      setTimeout(() => {
        skill.classList.add('animate');
      }, index * 200); // Adjust the delay as needed
    });
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <p>Explore my technical skills and expertise.</p>

      <div className="skill-container">
        <div className="skill">
          <h3>Frontend Development</h3>
          <p>React, Vue, HTML, CSS, JavaScript</p>
        </div>

        <div className="skill">
          <h3>Backend Development</h3>
          <p>Java, PHP, Node.js, Git, Django, Flask</p>
        </div>

        <div className="skill">
          <h3>Database</h3>
          <p>MongoDB, MySQL, PostgreSQL</p>
        </div>

        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;
