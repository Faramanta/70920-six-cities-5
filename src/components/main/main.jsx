import {connect} from "react-redux";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import LocationList from "../location-list/location-list";
import SortingList from "../sorting-list/sorting-list";
import {OffersPropTypes} from "Props";

const Main = (props) => {
  const {offers, cities, activeCity, hoverOfferCardId} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortingList />

              <OfferList offers={offers} className={`cities__places-list tabs__content`} />

            </section>
            <div className="cities__right-section">
              <Map offers={offers} cities={cities} className={`cities__map`} activeCity={activeCity} hoverOfferCardId={hoverOfferCardId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  cities: PropTypes.array.isRequired,
  hoverOfferCardId: PropTypes.number
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: state.offers,
  cities: state.cities,
  hoverOfferCardId: state.hoverOfferCardId,
});

export {Main};
export default connect(mapStateToProps)(Main);
