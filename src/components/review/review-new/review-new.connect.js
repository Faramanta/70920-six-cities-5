import ReviewNew from "./review-new";
import {connect} from "react-redux";
import {sendNewComment} from "@store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction: (offerId, commentData) => dispatch(sendNewComment(offerId, commentData)),
});

export default connect(null, mapDispatchToProps)(ReviewNew);
