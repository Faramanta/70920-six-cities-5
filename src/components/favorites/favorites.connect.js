import Favorites from "./favorites";
import {connect} from "react-redux";
import {getFavoriteOffer} from "@store/api-actions";

const mapStateToProps = (({DATA}) => {
  return {
    favoriteOffers: DATA.favoriteOffers
  };
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOfferAction: () => dispatch(getFavoriteOffer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

