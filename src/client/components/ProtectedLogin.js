import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtecteddLogin({
  auth,
  component: Component,
  ...props
}) {
  return (
    <Route
      {...props}
      render={() => (!auth.loggedIn ? <Component /> : <Redirect to="/" />)}
    ></Route>
  );
}
