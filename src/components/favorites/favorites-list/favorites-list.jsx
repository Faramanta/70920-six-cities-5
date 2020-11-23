import FavoritesCard from "@components/favorites/favorites-card/favorites-card.connect";
import {OffersPropTypes} from "@props";

const FavoritesList = ({city, favoriteOffersInCity}) => {
  const favoriteCityCard = favoriteOffersInCity.map((favoriteOffer, index) => {
    return (
      <FavoritesCard
        key={index}
        favoriteOffer={favoriteOffer}
      />
    );
  });

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteCityCard}
      </div>
    </li>
  );
};

FavoritesList.propTypes = {
  favoriteOffersInCity: PropTypes.arrayOf(OffersPropTypes).isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesList;
