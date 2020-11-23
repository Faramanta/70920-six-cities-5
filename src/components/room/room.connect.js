import Room from "./room";
import {connect} from "react-redux";
import {getCurrentOffer, getOffersNearby, changeFavoriteStatus, getCurrentOfferComments} from "@store/api-actions";
import {loadCurrentOffer} from "@store/action";

const mapStateToProps = ({DATA, PROCESS, USER}) => ({
  offer: DATA.currentOffer,
  offersNearby: DATA.offersNearby,
  cities: PROCESS.cities,
  city: PROCESS.city,
  hoverOfferCardId: PROCESS.hoverOfferCardId,
  authorizationStatus: USER.authorizationStatus,
  currentOfferComments: DATA.currentOfferComments,
});

const mapDispatchToProps = (dispatch) => ({
  resetActiveOffer: () => dispatch(loadCurrentOffer(null)),
  getCurrentOfferAction: (id) => dispatch(getCurrentOffer(id)),
  getOffersNearbyAction: (id) => dispatch(getOffersNearby(id)),
  updateFavoriteStatus: (id, favoriteStatus) => dispatch(changeFavoriteStatus(id, favoriteStatus)),
  getCurrentOfferCommentsAction: (id) => dispatch(getCurrentOfferComments(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);

