/** @format */

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Image, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { stypeIF, stypeIT } from "../SignUp/SignUp";
import { styleForm } from "../SignUp/SignUp";
import { styleBtn } from "../SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { DangNhap } from "../../redux/Action/action";
import "./css.css";
export default function SignIn(props) {
  const {token} = props;
  const dispatch = useDispatch();
  // const token = localStorage.getItem("accessToken");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
      dispatch(DangNhap(values));
    },
  });

  if(token)
  return <Redirect to={"/getAllProject"}/>
  return (
    <div className="container padding_top">
      <div className="row">
       {width<768?"":(<div className="col-8 bg "></div>)}
  
    
        <div className={width<768?"text-center":"col-4"}>
          <Form
            style={styleForm}
            onSubmitCapture={formik.handleSubmit}
            layout="horizontal"
          >
            <h3 className="text-center sign_up py-2">Login</h3>

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
              <span>Don't have an account yet?</span>
              <Link to="/signup" className=" text-decoration-none px-1">
                Register now
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
