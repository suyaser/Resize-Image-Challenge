import React from "react";

export default ProtectedRoute = ({ auth, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (auth.loggedIn ? <Component /> : <Redirect to="/login" />)}
    ></Route>
  );
};
