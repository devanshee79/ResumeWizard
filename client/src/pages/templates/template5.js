import React from "react";
import "../../resources/template5.css";

function Template5() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="template5-parent">
      <div className="template5-top template5-d-flex justify-content-between">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="template5-section template5-objective">
        <h3>Objective</h3>
        <p>{user.carrierObjective}</p>
      </div>

      <div className="template5-section template5-education">
        <h3>Education</h3>
        {user.education.map((education) => (
          <div className="template5-d-flex template5-align-items-center" key={education.range}>
            <h6 style={{ width: 100 }}>
              <b>{education.range}:</b>
            </h6>
            <p>
              <b>{education.qualification}</b> with{" "}
              <b>{education.percentage}%</b> in {education.institution}
            </p>
          </div>
        ))}
      </div>

      <div className="template5-section template5-experience">
        <h3>Experience</h3>
        {user.experience.map((exp) => (
          <div className="template5-d-flex template5-align-items-center" key={exp.range}>
            <h6 style={{ width: 100 }}>
              <b>{exp.range}:</b>
            </h6>
            <p>
              <b>{exp.company}</b> in <b>{exp.place}</b>
            </p>
          </div>
        ))}
      </div>

      <div className="template5-section template5-projects">
        <h3>Projects</h3>
        {user.projects.map((project) => (
          <div className="template5-d-flex template5-flex-column" key={project.title}>
            <h6>
              <b>
                {project.title} [{project.range}]{" "}
              </b>
            </h6>
            <p>{project.rating}</p>
            <ul>
              {(project.description ? project.description.split("\n") : []).map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="template5-section template5-skills">
        <h3>Skills</h3>
        {user.skills.map((skill, index) => (
          <p key={index}>{skill.technology}</p>
        ))}
      </div>
    </div>
  );
}

export default Template5;
