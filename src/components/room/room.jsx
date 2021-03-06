import Header from "@components/header/header.connect";
import ReviewList from "@components/review/review-list/review-list";
import ReviewNew from "@components/review/review-new/review-new.connect";
import OfferList from "@components/offer/offer-list/offer-list";
import Map from "@components/map/map";
import {OffersPropTypes, ReviewsPropTypes} from "@props";
import {AuthorizationStatus} from "@const";
import {useParams} from 'react-router-dom';

const Room = ({offer, offersNearby, onHeaderLinkClick, resetActiveOffer, getCurrentOfferAction, getCurrentOfferCommentsAction, getOffersNearbyAction, onFavoriteButtonClick, authorizationStatus, updateFavoriteStatus, currentOfferComments}) => {
  const {id} = useParams();

  React.useEffect(() => {
    resetActiveOffer();
    getCurrentOfferAction(id);
    getCurrentOfferCommentsAction(id);
    getOffersNearbyAction(id);
  }, [id]);

  if (offer === null || offersNearby.length === 0) {
    return (
      <div style={{position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
        <p style={{display: `block`, textAlign: `center`, fontSize: `34px`}}>Loading...</p>
      </div>
    );
  }

  const imagesForShow = offer.images.length > 6 ? offer.images.slice(0, 6) : ``;
  const superBtnClass = offer.isSuper ? `property__avatar-wrapper--pro user__avatar` : ``;
  const favoriteBtnClass = offer.isFavorite ? `property__bookmark-button--active` : ``;
  const reviewsCount = currentOfferComments.length;

  return (
    <div className="page">

      <Header onHeaderLinkClick={onHeaderLinkClick} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {imagesForShow.map((picture, index) =>(
                <div className="property__image-wrapper" key={index}>
                  <img className="property__image" src={picture} alt="Photo studio" key/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>

                <button className={`property__bookmark-button button ${favoriteBtnClass}`} type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onFavoriteButtonClick(authorizationStatus);
                    if (authorizationStatus === AuthorizationStatus.AUTH) {
                      updateFavoriteStatus(offer.id, offer.isFavorite ? 0 : 1);
                    }
                  }}
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `80%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guestCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.facilities.map((facility, index) => (
                    <li className="property__inside-item" key={index}>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${superBtnClass} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.ownerAvatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.ownerName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">

                {currentOfferComments.length > 0 &&
                <>
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
                <ReviewList currentOfferComments={currentOfferComments} />
                </>
                }

                {authorizationStatus === AuthorizationStatus.AUTH &&
                <ReviewNew idCurrentOffer={offer.id} />
                }

              </section>
            </div>
          </div>
          {offersNearby.length > 0 &&
          <section className="property__map map">
            <Map offers={offersNearby} city={offer.city} offer={offer} />
          </section>
          }
        </section>

        {offersNearby.length > 0 &&
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <OfferList
              offers={offersNearby}
              city={offer.city.name}
              className={`near-places__list`}
              onOfferHover={()=>({})}
              onFavoriteButtonClick={onFavoriteButtonClick}
            />
          </section>
        </div>
        }
      </main>
    </div>
  );
};

Room.propTypes = {
  city: PropTypes.string.isRequired,
  offer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.arrayOf(OffersPropTypes)
  ]),
  offersNearby: PropTypes.arrayOf(OffersPropTypes),
  onHeaderLinkClick: PropTypes.func.isRequired,
  getCurrentOfferAction: PropTypes.func.isRequired,
  getOffersNearbyAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func,
  updateFavoriteStatus: PropTypes.func.isRequired,
  getCurrentOfferCommentsAction: PropTypes.func.isRequired,
  resetActiveOffer: PropTypes.func.isRequired,
  currentOfferComments: PropTypes.arrayOf(ReviewsPropTypes),
};

export default Room;
