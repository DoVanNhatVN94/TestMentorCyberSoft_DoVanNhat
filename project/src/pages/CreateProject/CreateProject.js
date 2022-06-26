/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import { CreateProjectAction, ProjectCategoryAction } from "../../redux/Action/action";
import Item from "antd/lib/list/Item";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

function CreateProject() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [value3, setValue3] = useState("");

  const editorRef = useRef(null);
  const { pc,user } = useSelector((state) => state.MainReducer);
  console.log(user);

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

  // const txtEditor = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //     setValue3(editorRef.current.getContent());
  //   }
  // };
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
    dispatch(CreateProjectAction(body))
  };

  return (
    <div className="container ">
      <Form layout="vertical" onFinish={onFinish} className="p-4">
        <h2 className="pb-2 fw-bold">New Project</h2>
        <Form.Item
          label={<div className="fw-bold">Project Name</div>}
          name="projectName"
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

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateProject;
