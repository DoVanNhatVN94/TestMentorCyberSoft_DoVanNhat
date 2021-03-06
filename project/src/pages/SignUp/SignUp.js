/** @format */

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input } from "antd";
import { MailOutlined, PhoneOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DangKyND } from "../../redux/Action/action";

export const stypeIF = {
  color: "WHITE",

  borderRadius: "50%",
  width: 30,
  background: " #3c579d",
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor:"pointer"
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
  cursor:"pointer"
};

export const styleForm = {
  padding: "1.5em",
  margin: "auto",
  background: "#547dde1f",
  borderRadius: 10,
  maxWidth: 400,
};

export const styleBtn = {
  width: "100%",
  height: 30,
  background: "#6576de",
  color: "white",
  border: "none",
  borderRadius: 5,
};

function SignUp() {
  const dispatch = useDispatch();

  const style = {
    width: 300,
    margin: "auto",
    padding: "50px 0",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Mật khẩu không được để trống"),
      email: Yup.string()
        .required("Email khong duoc de trong")
        .email("Email ko đúng định dạng email"),
      // .notOneOf(taoDSNDEmail, "Email đã được sử dụng")
      phoneNumber: Yup.string().required("Số điện thoai khong duoc de trong"),
      //matches : kiểm tra biểu thức
      name: Yup.string()
        .required("Họ Tên khong duoc de trong")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Tên chỉ có ký tự chữ hoy"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(DangKyND(values));
    },
  });

  return (
    <div className="container padding_top">
      {" "}
      <div style={style}>
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
              name="name"
              size="large"
              placeholder="name"
              prefix={<MailOutlined />}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="alert alert-danger">{formik.errors.name}</div>
            ) : null}
          </Form.Item>
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
              name="phoneNumber"
              size="large"
              placeholder="phone number"
              prefix={<PhoneOutlined />}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="alert alert-danger">
                {formik.errors.phoneNumber}
              </div>
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
              <div className="alert alert-danger">{formik.errors.password}</div>
            ) : null}
          </Form.Item>

          <button type="submit" style={styleBtn}>
            Button
          </button>
          <div className="text-center py-2">
            <span>
              Already have an account?
              <Link to="/signin" className=" text-decoration-none px-1">
                Login now
              </Link>
            </span>
          </div>
          <div className=" d-flex justify-content-center py-2">
            <i className="fab fa-facebook-f mx-1" style={stypeIF}></i>
            <i className="fab fa-twitter mx-1" style={stypeIT}></i>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default SignUp = SignUp;
