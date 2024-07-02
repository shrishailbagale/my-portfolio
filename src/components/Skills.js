import React from "react";
import "./Skills.css";
import htmlLogo from "../logos/html.png";
import cssLogo from "../logos/css.png";
import javascriptLogo from "../logos/javascript.png";
import reactLogo from "../logos/react.png";
import androidLogo from "../logos/android.png";
import firebaseLogo from "../logos/firebase.png";
import javaLogo from "../logos/java.png";
import mysqlLogo from "../logos/mysql.png";
import phpLogo from "../logos/php.png";
import gitLogo from "../logos/git.png";
import githubLogo from "../logos/github.png";
import bootstrapLogo from "../logos/bootstrap.png";
import skillsIcon from "../images/skills-icon.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "React", logo: reactLogo },
    { name: "Android", logo: androidLogo },
    { name: "Firebase", logo: firebaseLogo },
    { name: "Java", logo: javaLogo },

    { name: "MySQL", logo: mysqlLogo },
    { name: "PHP", logo: phpLogo },
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
  ];

  return (
    <section className="skills-container" id="Skills">
      <div className="heading-container">
        <img src={skillsIcon} alt="Icon" className="icon" />
        <h2 className="heading">
          Skills & <span>Abilities</span>
        </h2>
      </div>
      <p className="description">My skills and knowledge.</p>
      <div className="skills-category">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={`${skill.name} Logo`} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
