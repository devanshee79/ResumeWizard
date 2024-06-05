import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
function SkillsEducation() {
  return (
    <div style={{
      backgroundColor:"whiteSmoke",
      border: "2px solid",
      borderRadius:"2px",
      borderColor:"#cccccc",
      margin: "0 0 4rem",
      
    }}>
      <h5 style={{ fontSize: "1.5rem", fontWeight: "400", position: "relative", left: "1.5rem" }}>Education</h5>
      {/* <hr /> */}
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className=" row1 ant-form-item-control-input-content">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "qualification"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                      styles={{margin:" 20rem 0"}}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "percentage"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                      styles={{margin:" 2rem 0"}}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                      styles={{margin:" 2rem 0"}}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                      styles={{margin:" 2rem 0"}}
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
                className="btn_edu"
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                style={{
                  position: "relative",
                  top: "4rem",
                  left: "12rem",
                  width: "12rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                Add Education
              </Button>
            </Form.Item>
            <br></br>
            <br></br>
          </>
        )}
      </Form.List>
      <h5 style={{ fontSize: "1.5rem", fontWeight: "400", position: "relative", left: "1.5rem"}}>Skills</h5>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="skills-container">
              {fields.map(({ key, name, ...restField }) => (
                <div className="skill-row" key={key}>
                  <div className="skill-field">
                    <Form.Item
                      {...restField}
                      name={[name, "technology"]}
                      rules={[
                        { required: true, message: "Missing technology" },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>
                  <div className="skill-field">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[{ required: true, message: "Missing rating" }]}
                    >
                      <Input placeholder="Rating" />
                    </Form.Item>
                  </div>
                  <div className="skill-remove">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Form.Item>
              <Button
                className="btn_skills"
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
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default SkillsEducation;
