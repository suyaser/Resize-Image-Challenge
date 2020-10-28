import { connect } from "react-redux";
import React from "react";
import Main from "../components/Main";
import ProtectedLogin from "../components/ProtectedLogin";
import ProtectedRoute from "../components/ProtectedRoute";
import SignIn from "./SignIn";
import { validateUserRequest } from "../actions/User";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App({ user, validateUserRequest }) {
  React.useEffect(() => {
    validateUserRequest();
  }, []);
  return (
    <Router>
      <Switch>
        <ProtectedLogin
          auth={user}
          path="/login"
          component={SignIn}
        ></ProtectedLogin>
        <ProtectedRoute auth={user} path="/" component={Main}></ProtectedRoute>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  validateUserRequest: () => dispatch(validateUserRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
