import { Form, Input } from "antd";
import React from "react";
const user = localStorage.getItem("user");

const { TextArea } = Input;

function PersonalInfo() {
  return (
    <div>
      <div
        className="row5"
        style={{
          backgroundColor:"whiteSmoke",
          border: "2px solid",
          borderRadius:"2px",
          borderColor:"#cccccc",
          margin: "0 0 8rem",
          display: "grid",
          gridTemplateColumns: "auto auto auto auto ",
          gridGap: "10px",
        }}
      >
        <div className="col-md-4" >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input initialValue="John" />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="portfolio"
            label="Portfolio"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item
            name="carrierObjective"
            label="Carrier Objective"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
