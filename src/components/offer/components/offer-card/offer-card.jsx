import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {OffersPropTypes} from "@props";
import {getRating} from "@utils/utils";
import {TypeRoom, AppRoute} from "@const";
import {changeFavoriteStatus} from "@store/api-actions";

const OfferCard = (props) => {
  const {offer, onFavoriteButtonClick, updateFavoriteStatus, onOfferHover, authorizationStatus} = props;
  const favoriteBtnClass = offer.isFavorite ? `place-card__bookmark-button--active` : ``;
  const hotelRating = getRating(offer.rating);

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onOfferHover(offer);
      }}
    >
      {offer.isPremium &&
        <>
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        </>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>

          <button
            className={`place-card__bookmark-button ${favoriteBtnClass} button`}
            type="button"
            onClick={() => {
              onFavoriteButtonClick(authorizationStatus);
              updateFavoriteStatus(offer.id, offer.isFavorite ? 0 : 1);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: hotelRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{TypeRoom[offer.type.toUpperCase()]}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  onOfferHover: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func,
  updateFavoriteStatus: PropTypes.func.isRequired,
  offer: OffersPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  user: USER.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus: (id, favoriteStatus) => dispatch(changeFavoriteStatus(id, favoriteStatus))
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
