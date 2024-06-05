import React from "react";
import "../../resources/template1.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="temp1-parent">
      <div className="temp1-top temp1-d-flex temp1-flex-column">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
          <br></br>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="temp1-divider mt-3"></div>
      <div className="temp1-objective mt-3">
        <h3>Objective</h3>
        {/* <hr /> */}
        <p>{user.carrierObjective}</p>
      </div>
      <div className="temp1-divider mt-3"></div>

      <div className="temp1-education mt-3">
        <h3>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="temp1-d-flex temp1-align-items-center" key={education.range}>
              <h6 style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6>
              <p>
                <b>{education.qualification}</b> with{" "}
                <b>{education.percentage}%</b> in {education.institution}
              </p>
            </div>
          );
        })}
      </div>

      <div className="temp1-divider mt-3"></div>

      <div className="temp1-experience mt-3">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="temp1-d-flex temp1-align-items-center" key={exp.range}>
              <h6 style={{ width: 120 }}>
                <b>{exp.range} : </b>
              </h6>
              <p>
                <b>{exp.company}</b> in <b>{exp.place}</b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="temp1-divider mt-3"></div>

      <div className="temp1-projects mt-3">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project) => {
          return (
            <div className="temp1-d-flex temp1-flex-column" key={project.title}>
              <h6>
                <b>
                  {project.title} [{project.range}]{" "}
                </b>
              </h6>
              <p>{project.rating}</p>
            </div>
          );
        })}
      </div>

      <div className="temp1-divider mt-3"></div>

      <div className="temp1-skills mt-3">
        <h3>Skills</h3>
        <hr />
        {user.skills.map((skill, index) => {
          return <p key={index}>{skill.technology}</p>;
        })}
      </div>
    </div>
  );
}

export default Template1;
