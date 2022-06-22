/** @format */

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { stypeIF, stypeIT } from "../SignUp/SignUp";


export default function SignIn() {
  useEffect(() => {
    console.log("SignIn hello");
  }, []);
  console.log("SignIn hello");
  const onFormLayoutChange = () => {};
  return (
    <div className="row">
      <div className="col-8">
        <img src="../../assets/img/image.bmp"/>
      </div>
      <div className="col-4 p-2"> <Form layout="horizontal" onValuesChange={onFormLayoutChange}>
        <Form.Item>
          <Input size="large" placeholder="name" prefix={<UserOutlined />} />
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
            Already have an account?
          </span>
          <Link to="/signin" className=" text-decoration-none">
              Login now
            </Link>
        </div>
        <div className=" d-flex justify-content-center py-2">
          <i className="fab fa-facebook-f mx-1" style={stypeIF}></i>
          <i className="fab fa-twitter mx-1" style={stypeIT}></i>
        </div>
      </Form></div>
     
    </div>
  );
}
