/** @format */

import React, { useEffect } from "react";
import { Avatar, Input, Table } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllProjectAction,
  SearchGetAllProjectAction,
} from "../../redux/Action/action";
import { Link, Redirect } from "react-router-dom";
import { styleBtn } from "../SignUp/SignUp";
const { Search } = Input;

export default function GetAllProject() {
  const token = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.MainReducer);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "projectId",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Creator",
      key: "creator",
      dataIndex: "creator",
      render: (creator) => <span>{creator.name}</span>,
    },
    {
      title: "Members",
      key: "members",
      dataIndex: "members",
      render: (_, { members }) => (
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {members.map((user) => {
            return <Avatar key={`Avatar ${user}`} src={user?.avatar} />;
          })}
        </Avatar.Group>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (x) => (
        <a>
          <EllipsisOutlined />
        </a>
      ),
    },
  ];

  useEffect(() => {
    if (token) dispatch(GetAllProjectAction());
  }, []);

  const onSearch = (value) => {
    if (value) dispatch(SearchGetAllProjectAction(value));
    else dispatch(GetAllProjectAction());
  };
  if(!token)
  return <Redirect to={"/signin"}/>
  return (
    <div className="container padding_top">
      <div className="d-flex justify-content-between align-items-center">
        <h2>PROJECT</h2>
        <Link to={"/createProject"}>
          <button
            style={styleBtn}
            className="px-4 py-2 d-flex justify-content-center align-items-center"
          >
            Create Project
          </button>
        </Link>
      </div>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: 300,
        }}
      />
      <Table
        className="overflow-auto"
        columns={columns}
        dataSource={data}
        rowKey={(row) => {
          return row.id;
        }}
      />
      ;
    </div>
  );
}
