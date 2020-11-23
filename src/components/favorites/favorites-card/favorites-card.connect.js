import FavoritesCard from "./favorites-card";
import {connect} from "react-redux";
import {changeFavoriteStatus} from "@store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, favoriteStatus) {
    dispatch(changeFavoriteStatus(id, favoriteStatus));
  },
});
export default connect(null, mapDispatchToProps)(FavoritesCard);

