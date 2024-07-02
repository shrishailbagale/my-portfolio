import React from "react";
import "./Education.css";
import clgAllana from "../images/allana_college.jpg";
import clgSoni from "../images/DHB_Soni_college.jpg";
import educationIcon from "../images/education-icon.png";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="heading-container">
        <img src={educationIcon} alt="Icon" className="icon" />
        <h2 className="heading">
          My <span>Education</span>
        </h2>
      </div>
      <p className="description">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="box-container">
        <div className="box box-1">
          <div className="image">
            <img src={clgAllana} alt="Allana Institute of Management Science" />
          </div>
          <div className="content">
            <h3>Master of Computer Application (MCA)</h3>
            <p>Allana Institute of Management Science, Pune (SPPU)</p>
            <h4>
              2021-2023 | <span>Completed</span>
            </h4>
          </div>
        </div>

        <div className="box box-2">
          <div className="image">
            <img draggable="true" src={clgSoni} alt="D.H.B. Soni College" />
          </div>
          <div className="content">
            <h3>Bachelor of Computer Science (BCS)</h3>
            <p>D.H.B. Soni College, Solapur | Solapur University</p>
            <h4>
              2018-2021 | <span>Completed</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
