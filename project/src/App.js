/** @format */
import React from "react";

import { NavLink, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import SignUp from "./pages/SignUp/SignUp";

import "antd/dist/antd.css";
import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import CreateProject from "./pages/CreateProject/CreateProject";
import GetAllProject from "./pages/GetAllProject/GetAllProject";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/signin"
                  >
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/getallproject"
                  >
                    GetAllProject
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/createproject"
                  >
                    Create Project
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/createProject" component={CreateProject} />
          <Route path="/getAllProject" component={GetAllProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
