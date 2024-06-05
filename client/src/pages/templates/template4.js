import React from "react";
import "../../resources/template4.css";

function Template4() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="template4-parent">
      <div className="template4-top template4-d-flex justify-content-between">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>


      <div className="template4-objective">
        <h3>Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>

      <div className="template4-education">
        <h3>Education</h3>
        <hr />
        {user.education.map((education) => (
          <div className="template4-d-flex template4-align-items-center" key={education.range}>
            <h6 style={{ width: 120 }}>
              <b>{education.range}:</b>
            </h6>
            <p>
              <b>{education.qualification}</b> with{" "}
              <b>{education.percentage}%</b> in {education.institution}
            </p>
          </div>
        ))}
      </div>

      <div className="template4-experience">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp) => (
          <div className="template4-d-flex template4-align-items-center" key={exp.range}>
            <h6 style={{ width: 120 }}>
              <b>{exp.range}:</b>
            </h6>
            <p>
              <b>{exp.company}</b> in <b>{exp.place}</b>
            </p>
          </div>
        ))}
      </div>

      <div className="template4-projects">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project) => (
          <div className="template4-d-flex template4-flex-column" key={project.title}>
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

      <div className="template4-skills">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((skill, index) => (
          <p key={index}>{skill.technology}</p>
        ))}
      </div>
    </div>
  );
}

export default Template4;
