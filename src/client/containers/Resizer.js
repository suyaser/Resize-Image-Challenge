import Resizer from "../components/Resizer";
import { resizeRequest } from "../actions/Resize";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  resizeRequest: (img) => dispatch(resizeRequest(img)),
});

const mapStateToProps = (state) => ({
  img: state.resize.img,
});

export default connect(mapStateToProps, mapDispatchToProps)(Resizer);
