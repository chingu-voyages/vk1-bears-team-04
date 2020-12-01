import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  // Add Validation Here
  const condition = true;

  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
