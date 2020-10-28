import React from "react";

export default ProtectedLogin = ({ auth, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (!auth.loggedIn ? <Component /> : <Redirect to="/" />)}
    ></Route>
  );
};
