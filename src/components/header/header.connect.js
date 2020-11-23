import Header from "./header";
import {connect} from "react-redux";

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  user: USER.user,
});

export default connect(mapStateToProps)(Header);
