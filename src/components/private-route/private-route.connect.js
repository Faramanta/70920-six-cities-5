import PrivateRoute from "./private-route";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
