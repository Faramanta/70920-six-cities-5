import {connect} from "react-redux";
import {changeCity} from "@store/action";
import LocationItem from "@components/location-item/location-item";

const LocationList = (props) => {
  const {cities, activeCity, changeCityAction} = props;

  const onLocationItemClick = (evt, city) => {
    evt.preventDefault();
    changeCityAction(city);
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
  changeCityAction: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  cities: PROCESS.cities,
  activeCity: PROCESS.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(activeCity) {
    dispatch(changeCity(activeCity));
  },
});

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
