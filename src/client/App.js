import { connect } from "react-redux";
import React from "react";
import Main from "./components/Main";
import SignIn from "./containers/SignIn";

function App({ user }) {
  return user.loggedIn ? <Main /> : <SignIn />;
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
