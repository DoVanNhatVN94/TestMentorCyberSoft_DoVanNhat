/** @format */

import React from "react";
import { Button, Form, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

  export  const stypeIF = {
    color: "WHITE",

    borderRadius: "50%",
    width: 30,
    background: " #3c579d",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  export const stypeIT = {
    color: "WHITE",

    borderRadius: "50%",
    width: 30,
    background: "#1e91ff",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

 function SignUp() {
  const style = {
    width: 300,
    margin: "auto",
    padding: "200px 0",
  };

  const onFormLayoutChange = () => {};

  return (
    <div style={style}>
      <h2 className="text-center sign_up py-2">Register CyberBugs</h2>
      <Form layout="horizontal" onValuesChange={onFormLayoutChange}>
        <Form.Item>
          <Input size="large" placeholder="name" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item>
          <Input size="large" placeholder="email" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item>
          <Input
            size="large"
            placeholder="phone number"
            prefix={<PhoneOutlined />}
          />
        </Form.Item>
        <Form.Item>
          <Input
            size="large"
            placeholder="pass word"
            prefix={<LockOutlined />}
          />
        </Form.Item>

        <Button
          type="primary"
          style={{ width: "100%", borderRadius: 5, backgroundColor: "#6576de" }}
        >
          Button
        </Button>
        <div className="text-center py-2">
          <span>
            Already have an account?{" "}
            <Link to="/signin" className=" text-decoration-none">Login now</Link>
          </span>
        </div>
        <div className=" d-flex justify-content-center py-2">
          <i className="fab fa-facebook-f mx-1" style={stypeIF}></i>
          <i className="fab fa-twitter mx-1" style={stypeIT}></i>
        </div>
      </Form>
    </div>
  );
}
export default SignUp = SignUp