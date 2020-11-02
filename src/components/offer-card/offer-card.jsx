import {Link} from "react-router-dom";
import {OffersPropTypes} from "@props";
import {getRating} from "./../../utils/utils";

const OfferCard = (props) => {
  const {offer, offerPathname, onOfferCardOver, onOfferCardOut} = props;
  const roomUrl = `/offer/` + offerPathname;
  const favoriteBtnClass = offer.isFavorite ? `place-card__bookmark-button--active` : ``;
  const hotelRating = getRating(offer.rating);

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={onOfferCardOver}
      onMouseOut={onOfferCardOut}
    >
      {offer.isPremium &&
        <>
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        </>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={roomUrl}>
          <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${favoriteBtnClass} button`} type="button">
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
          <Link to={roomUrl}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offerPathname: PropTypes.number,
  onOfferCardOver: PropTypes.func.isRequired,
  onOfferCardOut: PropTypes.func.isRequired,
  offer: OffersPropTypes
};

export default OfferCard;
