/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateProjectAction,
  ProjectCategoryAction,
} from "../../redux/Action/action";

import { Button, Form, Input, Select } from "antd";
import { Redirect } from "react-router";
import { history } from "../../App";

const { Option } = Select;

function CreateProject() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  const editorRef = useRef(null);
  const { pc } = useSelector((state) => state.MainReducer);

  useEffect(() => {
    dispatch(ProjectCategoryAction());
  }, []);

  const renderOption = () => {
    return pc?.map((item, index) => {
      return (
        <Option key={index} value={item.id}>
          {item.projectCategoryName}
        </Option>
      );
    });
  };
  const onFinish = (values) => {
    const description = editorRef.current.getContent();

    const { projectName, categoryId } = values;
    console.log("Success:", projectName, description, categoryId);
    const body = {
      projectName,
      description,
      categoryId,
    };
    console.log(body);
    dispatch(CreateProjectAction(body));
  };
  if (!token) return <Redirect to={"/signin"} />;
  return (
    <div className="container padding_top ">
      <Form layout="vertical" onFinish={onFinish} className="p-4">
        <h2 className="pb-2 fw-bold">New Project</h2>
        <Form.Item
          label={<div className="fw-bold">Project Name</div>}
          name="projectName"
          tooltip="Hãy nhập tên dự án của bạn"
          rules={[
            {
              required: true,
              message: "Please input your Project Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<div className="fw-bold">Project Category</div>}
          name="categoryId"
          tooltip="Chọn loại dự án"
          rules={[
            {
              required: true,
              message: "Project category is required!",
            },
          ]}
        >
          <Select
            rules={[{ required: true }]}
            placeholder="Select a project category"
            style={{ width: "100%" }}
          >
            {renderOption()}
          </Select>
        </Form.Item>
        <Form.Item
          label={<div className="fw-bold">Descriptions</div>}
          name="descriptions"
          tooltip="Nhập mô tả dự án của bạn ở đây"
        >
          {" "}
          <Editor
            apiKey="6ablfz69eb4qj7jg7lq26ugwlxvnp0uvay8zo052cglzonat"
            onInit={(evt, editor) => (editorRef.current = editor)}
            // initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 200,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </Form.Item>

        <div className="d-flex">
          <div>
            <button onClick={()=>{
              history.goBack()
            }} className="btn btn-outline-secondary">Cancel</button>
          </div>
          <div className="px-2">
            <button className="btn btn-primary" htmlType="submit">
              Create
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default CreateProject;
