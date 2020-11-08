import {connect} from "react-redux";
import Header from "@components/header/header";
import ReviewList from "@components/review/review-list/review-list";
import ReviewNew from "@components/review/components/review-new/review-new";
import OfferList from "@components/offer-list/offer-list";
import Map from "@components/map/map";
import {OffersPropTypes} from "@props";
import {getCurrentOffer, getOffersNearby} from "@store/api-actions";
import {AuthorizationStatus} from "@const";
import {changeFavoriteStatus} from "@store/api-actions";
import {updateCurrentOfferFavoriteStatus} from "@store/action";

class Room extends React.PureComponent {

  componentDidMount() {
    const {idCurrentOffer, loadCurrentOffer, loadOffersNearby} = this.props;
    loadCurrentOffer(idCurrentOffer);
    loadOffersNearby(idCurrentOffer);
  }

  componentDidUpdate(prevProps) {
    const {idCurrentOffer, loadCurrentOffer, loadOffersNearby} = this.props;

    if (prevProps.idCurrentOffer !== idCurrentOffer) {
      loadCurrentOffer(idCurrentOffer);
      loadOffersNearby(idCurrentOffer);
    }
  }

  render() {
    const {offer, offersNearby, onHeaderLinkClick, authorizationStatus, onFavoriteButtonClick, updateFavoriteStatus} = this.props;
    if (Object.keys(offer).length && offersNearby.length) {
      const imagesForShow = offer.images.length > 6 ? offer.images.slice(0, 6) : ``;
      const superBtnClass = offer.isSuper ? `property__avatar-wrapper--pro user__avatar` : ``;
      const favoriteBtnClass = offer.isFavorite ? `property__bookmark-button--active` : ``;

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
                        onFavoriteButtonClick(evt);
                        updateFavoriteStatus(offer.id, offer.isFavorite ? 0 : 1);
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

                    <ReviewList idCurrentOffer={offer.id} />

                    {authorizationStatus === AuthorizationStatus.AUTH &&
                      <ReviewNew idCurrentOffer={offer.id} />
                    }

                  </section>
                </div>
              </div>
              <Map offers={offersNearby} className={`property__map`} city={offer.city} />
            </section>
            <div className="container">
              <section className="near-places places">
                {offersNearby.length > 0 &&
                <>
                <h2 className="near-places__title">Other places in the neighbourhood</h2>

                <OfferList
                  offers={offersNearby}
                  city={offer.city}
                  className={`near-places__list`}
                  onFavoriteButtonClick={onFavoriteButtonClick}
                />
                </>
                }
              </section>
            </div>
          </main>
        </div>
      );
    }

    return (
      <div style={{position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
        <p style={{display: `block`, textAlign: `center`, fontSize: `34px`}}>Loading...</p>
      </div>
    );
  }
}

Room.propTypes = {
  city: PropTypes.string.isRequired,
  hoverOfferCardId: PropTypes.number,
  idCurrentOffer: PropTypes.number.isRequired,
  offer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.arrayOf(OffersPropTypes)
  ]),
  offersNearby: PropTypes.arrayOf(OffersPropTypes),
  allOffers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  onHeaderLinkClick: PropTypes.func.isRequired,
  loadCurrentOffer: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func,
  updateFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS, USER}) => ({
  offer: DATA.currentOffer,
  allOffers: DATA.allOffers,
  offersNearby: DATA.offersNearby,
  cities: PROCESS.cities,
  city: PROCESS.city,
  hoverOfferCardId: PROCESS.hoverOfferCardId,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentOffer(id) {
    dispatch(getCurrentOffer(id));
  },
  loadOffersNearby(id) {
    dispatch(getOffersNearby(id));
  },
  updateFavoriteStatus(id, favoriteStatus) {
    dispatch(changeFavoriteStatus(id, favoriteStatus, updateCurrentOfferFavoriteStatus));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
