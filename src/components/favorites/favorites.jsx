import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "@components/header/header";
import FavoritesList from "@components/favorites/components/favorites-list/favorites-list";
import {AppRoute} from "@const";
import {OffersPropTypes} from "@props";
import {getFavoriteOffer} from "@store/api-actions";

const Favorites = ({getFavoriteOfferAction, onHeaderLinkClick, favoriteOffers}) => {

  React.useEffect(() => {
    getFavoriteOfferAction();
  }, []);

  const favoriteOffersCity = [...new Set(favoriteOffers.map((offer) => offer.city))];
  const pageFavoriteEmptyClass = favoriteOffers.length === 0 ? `page--favorites-empty` : ``;
  const pageMainFavoriteEmptyClass = favoriteOffers.length === 0 ? `page__main--favorites-empty` : ``;

  const favoriteOffersCityList = favoriteOffersCity.map((city, index) => {
    const favoriteOffersInCity = favoriteOffers.filter((offer) => offer.city === city);
    return (
      <FavoritesList
        key={index}
        city={city}
        favoriteOffersInCity={favoriteOffersInCity}
      />
    );
  });

  return (
    <div className={`page ${pageFavoriteEmptyClass}`}>
      <Header onHeaderLinkClick={onHeaderLinkClick} />

      <main className={`page__main page__main--favorites ${pageMainFavoriteEmptyClass}`}>
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0
            ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
            :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteOffersCityList}
              </ul>
            </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );

};

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  onHeaderLinkClick: PropTypes.func.isRequired,
  getFavoriteOfferAction: PropTypes.func.isRequired,
};

const mapStateToProps = (({DATA}) => {
  return {
    favoriteOffers: DATA.favoriteOffers
  };
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOfferAction: () => dispatch(getFavoriteOffer()),
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
