import React from "react";
import DefaultLayout from "../components/DefaultLayout.js";
import { Button } from "antd";
import "../resources/start.css";
import { useNavigate } from "react-router-dom";
import heroImg from "./../resources/images/hero_image.jpeg";

function Start(props) {
  console.log(props);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () => {
    navigate("/register");
  };

  return (
    <div>
      {/* <DefaultLayout> */}

      <div className="container">
        <div className="text">
          <p className="p1">Welcome to Resume Wizard</p>
          <p className="p2">Your Ultimate Resume Builder</p>
          <p className="p3">
            Embark your carrier journey by creating free resume.
          </p>
        </div>
        <div className="pictureContainer">
          <img
            className="heroImg"
            src={heroImg}
            alt="Hero"
            width="500"
            height="333"
          ></img>
        </div>
      </div>
      <div className="btnContainer">
      <Button className="btn btn1" onClick={handleLoginClick}>
        Login
      </Button>
      <Button className="btn btn2" onClick={handleSignUpClick}>
        SignUp
      </Button>

      </div>
      {/* </DefaultLayout> */}
    </div>
  );
}

export default Start;
