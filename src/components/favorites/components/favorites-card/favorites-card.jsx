import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {OffersPropTypes} from "@props";
import {TypeRoom, AppRoute} from "@const";
import {getRating} from "@utils/utils";
import {changeFavoriteStatus} from "@store/api-actions";

const FavoritesCard = (props) => {
  const {favoriteOffer, updateFavoriteStatus} = props;
  const offerRating = getRating(favoriteOffer.rating);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}${favoriteOffer.id}`}>
          <img className="place-card__image" src={favoriteOffer.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favoriteOffer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"
            onClick={() => {
              updateFavoriteStatus(favoriteOffer.id, favoriteOffer.isFavorite ? 0 : 1);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offerRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}${favoriteOffer.id}`}>{favoriteOffer.title}</Link>
        </h2>
        <p className="place-card__type">{TypeRoom[favoriteOffer.type.toUpperCase()]}</p>
      </div>
    </article>
  );
};

FavoritesCard.propTypes = {
  favoriteOffer: OffersPropTypes,
  updateFavoriteStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, favoriteStatus) {
    dispatch(changeFavoriteStatus(id, favoriteStatus));
  },
});

export {FavoritesCard};
export default connect(null, mapDispatchToProps)(FavoritesCard);
