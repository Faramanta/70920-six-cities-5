import {connect} from "react-redux";
import Header from "@components/header/header";
import ReviewList from "@components/review/review-list/review-list";
import ReviewNew from "@components/review/components/review-new/review-new";
import OfferList from "@components/offer-list/offer-list";
import Map from "@components/map/map";
import {OffersPropTypes, ReviewsPropTypes} from "@props";

const Room = (props) => {
  const {city, hoverOfferCardId, reviews, offers, onHeaderLinkClick} = props;

  const offerPathname = parseInt(window.location.pathname.replace(`/offer/`, ``), 10);
  const offer = offers.find((item) => item.id === offerPathname);
  const imagesForShow = offer.images.slice(0, 6);
  const superBtnClass = offer.isSuper ? `property__avatar-wrapper--pro user__avatar` : ``;
  const offersCity = offers.filter((offerItem) => offerItem.city === offer.city);
  const offersNear = offersCity.filter((offerItem) => offerItem.id !== offer.id).slice(0, 3);

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

                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
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
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">

                <ReviewList reviews={reviews} offer={offer} />

                <ReviewNew reviews={reviews} offer={offer}/>

              </section>
            </div>
          </div>
          <Map offers={offersNear} className={`property__map`} city={city} hoverOfferCardId={hoverOfferCardId} />
        </section>
        <div className="container">
          <section className="near-places places">
            {offersNear.length > 0 &&
              <>
                <h2 className="near-places__title">Other places in the neighbourhood</h2>

                <OfferList offers={offersNear} className={`near-places__list`} />
              </>
            }
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  city: PropTypes.string.isRequired,
  hoverOfferCardId: PropTypes.number,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  allOffers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewsPropTypes).isRequired,
  onHeaderLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  allOffers: DATA.allOffers,
  cities: PROCESS.cities,
  city: PROCESS.city,
  hoverOfferCardId: PROCESS.hoverOfferCardId,
});

export {Room};
export default connect(mapStateToProps)(Room);
