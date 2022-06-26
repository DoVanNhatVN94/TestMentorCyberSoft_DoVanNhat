/** @format */

import React from "react";
import { Route } from "react-router-dom";
import Header from "../pages/copoments/header";
export default function MainTemplate(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRouter) => {
        return (
          <>
            <Header />
            <props.component {...propsRouter} />
          </>
        );
      }}
    />
  );
}
