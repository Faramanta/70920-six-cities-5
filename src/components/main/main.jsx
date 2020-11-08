import Header from "@components/header/header";
import OfferList from "@components/offer-list/offer-list";
import OfferListEmpty from "@components/offer-list-empty/offer-list-empty";
import Map from "@components/map/map";
import LocationList from "@components/location-list/location-list";
import SortingList from "@components/sorting-list/sorting-list";
import {OffersPropTypes} from "@props";

const Main = ({offers, city, hoverOfferCardId, onHeaderLinkClick, onFavoriteButtonClick}) => {

  const isOffersEmpty = offers.length === 0;
  const containersOffersEmptyClass = isOffersEmpty ? `cities__places-container--empty` : ``;
  const mainOffersEmptyClass = isOffersEmpty ? `page__main--index-empty` : ``;

  return (
    <div className="page page--gray page--main">

      <Header onHeaderLinkClick={onHeaderLinkClick} />

      <main className={`page__main page__main--index ${mainOffersEmptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container ${containersOffersEmptyClass} container`}>

            {isOffersEmpty ?
              <OfferListEmpty />
              :
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in {city}</b>
                  <SortingList />

                  <OfferList
                    offers={offers}
                    city={city}
                    className={`cities__places-list tabs__content`}
                    onFavoriteButtonClick={onFavoriteButtonClick}
                  />

                </section>
                <div className="cities__right-section">
                  <Map offers={offers} className={`cities__map`} city={city} hoverOfferCardId={hoverOfferCardId} />
                </div>
              </>
            }
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  hoverOfferCardId: PropTypes.number,
  onHeaderLinkClick: PropTypes.func,
  onFavoriteButtonClick: PropTypes.func,
};

export default Main;
