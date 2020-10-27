import SignIn from "../components/SignIn";
import { signInRequest } from "../actions/User";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  signInRequest: (user) => dispatch(signInRequest(user)),
});

export default connect(() => {}, mapDispatchToProps)(SignIn);
