/** @format */

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Image, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import { stypeIF, stypeIT } from "../SignUp/SignUp";
import { styleForm } from "../SignUp/SignUp";
import { styleBtn } from "../SignUp/SignUp";
import { useDispatch } from "react-redux";
import { DangNhap } from "../../redux/Action/action";


export default function SignIn() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Mật khẩu không được để trống"),
      email: Yup.string()
        .required("Email khong duoc de trong")
        .email("Email ko đúng định dạng email"),
      // .notOneOf(taoDSNDEmail, "Email đã được sử dụng")
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(DangNhap(values))
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Image width="100%" height="auto" src="../../assets/img/image.bmp" />
        </div>
        <div className="col-4 p-2">
          <Form
            style={styleForm}
            onSubmitCapture={formik.handleSubmit}
            layout="horizontal"
          >
            <h3 className="text-center sign_up py-2">Register CyberBugs</h3>

            <Form.Item>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                size="large"
                placeholder="email"
                prefix={<MailOutlined />}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="alert alert-danger">{formik.errors.email}</div>
              ) : null}
            </Form.Item>

            <Form.Item>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                size="large"
                type="password"
                placeholder="pass word"
                prefix={<LockOutlined />}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
              ) : null}
            </Form.Item>

            <button type="submit" style={styleBtn}>
              Button
            </button>
            <div className="text-center py-2">
              <span>Already have an account?</span>
              <Link to="/signup" className=" text-decoration-none">
                Login now
              </Link>
            </div>
            <div className=" d-flex justify-content-center py-2">
              <i className="fab fa-facebook-f mx-1" style={stypeIF}></i>
              <i className="fab fa-twitter mx-1" style={stypeIT}></i>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
