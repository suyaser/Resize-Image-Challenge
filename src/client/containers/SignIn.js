import SignIn from "../components/SignIn";
import { signInRequest } from "../actions/User";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  signInRequest: (user) => dispatch(signInRequest(user)),
});

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
