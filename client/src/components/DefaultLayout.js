import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { UserOutlined  } from "@ant-design/icons";
import logo from "./../resources/images/logo.jpeg";


function DefaultLayout(props) {
  
  const userJson = localStorage.getItem("user");
  const user = userJson ? JSON.parse(userJson) : null;

  
  console.log("in default file: ", user)

  const navigate = useNavigate();
  const menu = (
    <Menu >
      <Menu.Item style={{fontSize: '19px'}}>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item style={{fontSize: '19px', }}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
        style={{fontSize: '19px', }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        <img src={logo} onClick={()=>navigate('/home')} style={{cursor:'pointer', height:"6rem"}}></img>
        <Dropdown overlay={menu} placement="bottomLeft" className="navBtn">
          <Button className="dropdown" icon={<UserOutlined />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" >{props.children}</div>
    </div>
  );
}

export default DefaultLayout;