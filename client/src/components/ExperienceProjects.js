  import React from "react";
  import { Form, Input, Button, Space } from "antd";
  import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
  const { TextArea } = Input;
  function ExperienceProjects() {
    return (
      <div style={{
        backgroundColor:"whiteSmoke",
        border: "2px solid",
        borderRadius:"2px",
        borderColor:"#cccccc",
        margin: "0 0 4rem",
        
      }}>

        <h5 style={{ fontSize: "1.5rem", fontWeight: "400", position: "relative", left: "1.5rem"}}>Experience</h5>
   
        <Form.List name="experience">
          {(fields, { add, remove }) => (
            <>
              <div className="row1">
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "company"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Company" />
                      </Form.Item>
                    </div>

                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "years"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Years" />
                      </Form.Item>
                    </div>

                    <div className="col-md-3">
                      <Form.Item
                        {...restField}
                        name={[name, "place"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Place" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Year Range" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </>
                ))}
              </div>

              <Form.Item>
                <Button
                className="btn_exp"
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  style={{
                    position: "relative",
                    top: "4rem",
                    left: "1.5rem",
                    width: "12rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 0 8.5rem"
                  }}
                >
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <h5 style={{ fontSize: "1.5rem", fontWeight: "400", position: "relative", left: "1.5rem"}} 
        >Projects</h5>
        <Form.List name="projects">
          {(fields, { add, remove }) => (
            <>
              <div className="row3">
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Title" />
                      </Form.Item>
                    </div>

                    <div className="col-md-4">
                      <Form.Item
                        {...restField}
                        name={[name, "rating"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <TextArea placeholder="Description" />
                      </Form.Item>
                    </div>
                    <div className="col-md-2">
                      <Form.Item
                        {...restField}
                        name={[name, "range"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Year Range" />
                      </Form.Item>
                    </div>

                    <div className="col-md-2">
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: "tomato" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </>
                ))}
              </div>

              <Form.Item>
                <Button
                className="btn_project"
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                  style={{
                    position: "relative",
                    top: "4rem",
                    left: "1.5rem",
                    width: "12rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 0 10rem"
                  }}
                >
                  Add Project
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    );
  }

  export default ExperienceProjects;
