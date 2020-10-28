import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
  auth,
  component: Component,
  ...props
}) {
  return (
    <Route
      {...props}
      render={() => (auth.loggedIn ? <Component /> : <Redirect to="/login" />)}
    ></Route>
  );
}
