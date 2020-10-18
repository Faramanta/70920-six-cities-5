import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import LocationItem from "../location-item/location-item";

const LocationList = (props) => {
  const {cities, changeCity, activeCityIndex, getOffersList} = props;

  const onLocationItemClick = (evt) => {
    evt.preventDefault();
    changeCity(cities.indexOf(evt.target.textContent));
    getOffersList();
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => (
        <LocationItem
          key={index}
          city={city}
          activeCityIndex={activeCityIndex}
          onLocationItemClick={onLocationItemClick}
          className={activeCityIndex === index ? `tabs__item--active` : ``}
        />
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,
  getOffersList: PropTypes.func.isRequired,
  activeCityIndex: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  activeCityIndex: state.activeCityIndex,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(index) {
    dispatch(ActionCreator.changeCity(index));
  },
  getOffersList() {
    dispatch(ActionCreator.getOffersList());
  }
});

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
