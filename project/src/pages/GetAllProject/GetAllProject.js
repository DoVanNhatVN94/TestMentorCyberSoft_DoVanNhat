/** @format */

import React, { useEffect } from "react";
import { Avatar, Input, Space, Table, Tag } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllProjectAction,
  SearchGetAllProjectAction,
} from "../../redux/Action/action";
const { Search } = Input;

export default function GetAllProject() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.MainReducer);
  console.log(data);
  const colorAR = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];

  const columns2 = [
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
    dispatch(GetAllProjectAction());
  }, []);

  const onSearch = (value) => {
    if (value) dispatch(SearchGetAllProjectAction(value));
    else  dispatch(GetAllProjectAction());
  };

  return (
    <div className="container">
      <h2>PROJECT</h2>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
      <Table
        columns={columns2}
        dataSource={data}
        rowKey={(row) => {
          return row.id;
        }}
      />
      ;
    </div>
  );
}
