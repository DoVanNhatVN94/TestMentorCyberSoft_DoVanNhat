/** @format */
import React, { Fragment, useEffect, useState } from "react";

import { NavLink, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import SignUp from "./pages/SignUp/SignUp";

import "antd/dist/antd.css";
import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import CreateProject from "./pages/CreateProject/CreateProject";
import GetAllProject from "./pages/GetAllProject/GetAllProject";
import { useSelector } from "react-redux";
import { message } from "antd";

export const history = createBrowserHistory();

function App() {
  const { user } = useSelector((state) => state.MainReducer);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const style = {
    borderImageSlice: "1",
    color: "rgb(101 118 222)",
    borderBottom: "1px solid rgb(101 118 222)",
    transition: "all 0.2s",
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, [user]);

  const logout = () => {
    localStorage.clear();
    history.push("/signin");
    message.success("Đăng Xuất thành công", 3);
    setToken(localStorage.getItem("accessToken"));
  };

  const renderNav = () => {
    if (!token)
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={style}
              className="nav-link active"
              to="/signin"
            >
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={style}
              className="nav-link active"
              to="/signup"
            >
              Sign Up
            </NavLink>
          </li>
        </Fragment>
      );
    else
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink
              activeClassName="myActive"
              activeStyle={style}
              className="nav-link active"
              to="/getallproject"
            >
              GetAllProject
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link " onClick={logout}>
              Logout
            </a>
          </li>
        </Fragment>
      );
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              CyberSoft
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">{renderNav()}</ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/signin">
            <SignIn token={token} />
          </Route>
          <Route path="/signup" component={SignUp} />
          <Route path="/createProject" component={CreateProject} />
          <Route path="/getAllProject" component={GetAllProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
