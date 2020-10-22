import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import LocationItem from "../location-item/location-item";

const LocationList = (props) => {
  const {cities, changeCity, activeCity, getOffersList} = props;

  const onLocationItemClick = (evt, city) => {
    evt.preventDefault();
    changeCity(city);
    getOffersList();
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => (

        <LocationItem
          key={index}
          city={city}
          onLocationItemClick={(evt) => onLocationItemClick(evt, city)}
          className={activeCity === city ? `tabs__item--active` : ``}
        />
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,
  getOffersList: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(activeCity) {
    dispatch(ActionCreator.changeCity(activeCity));
  },
  getOffersList() {
    dispatch(ActionCreator.getOffersList());
  }
});

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
