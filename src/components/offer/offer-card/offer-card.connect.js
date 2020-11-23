import OfferCard from "./offer-card";
import {connect} from "react-redux";
import {changeFavoriteStatus} from "@store/api-actions";

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  user: USER.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus: (id, favoriteStatus) => dispatch(changeFavoriteStatus(id, favoriteStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);

