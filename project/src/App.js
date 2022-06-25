/** @format */
import React from 'react';

import { Route, Router, Switch } from "react-router-dom";
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
      <Switch>
        
        <Route  path="/signup" component={SignUp} />
        <Route  path="/signin" component={SignIn} />
        <Route  path="/createProject" component={CreateProject} />
        <Route  path="/getAllProject" component={GetAllProject} />
      </Switch>
    </Router>
  );
}

export default App;
