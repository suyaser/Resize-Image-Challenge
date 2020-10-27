import { connect } from "react-redux";
import Main from "../components/Main";

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Main);
