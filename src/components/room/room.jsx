import {Link} from "react-router-dom";
import ReviewList from "../review-list/review-list";
import ReviewNew from "../review-new/review-new";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import {OffersPropTypes, ReviewsPropTypes} from "../../utils/prop-types";

const Room = (props) => {
  const {offers, reviews} = props;
  const offerPathname = window.location.pathname.replace(`/offer/`, ``);
  const offer = offers[offerPathname];
  const superBtnClass = offer.isSuper ? `property__avatar-wrapper--pro user__avatar` : ``;
  const offersNear = offers.filter((offerItem) => offerItem.id !== offer.id).slice(0, 3);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.pictures.map((picture, index) =>(
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
          <Map offers={offersNear} className={`property__map`} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <OfferList offers={offersNear} className={`near-places__list`} />

          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewsPropTypes).isRequired,
};

export default Room;
