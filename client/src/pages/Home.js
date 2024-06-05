import React from "react";
import DefaultLayout from "../components/DefaultLayout.js";
import template1img from "../resources/templates/template1.jpeg";
import template2img from "../resources/templates/template2.jpeg";
import template3img from "../resources/templates/template3.jpeg";
import template4img from "../resources/templates/template4.jpeg";
import template5img from "../resources/templates/template5.jpeg";
import "../resources/template.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template1img,
    },
    {
      title: "Highlighted Sections Resume",
      image: template2img,
    },
    {
      title: " Modern Resume",
      image: template3img,
    },
    {
      title: "Elegant Colorful Background Resume",
      image: template4img,
    },
    {
      title: "Stylish Highlighted Resume",
      image: template5img,
    },
  ];
  return (
    // <Start>
    <DefaultLayout>
      <div
        className="row home"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto ",
          gridGap: "10px",
        }}
      >
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)} style={{width: '5rem', height:'2rem', fontWeight:"bold"}}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
    // </Start>
  );
}

export default Home;
