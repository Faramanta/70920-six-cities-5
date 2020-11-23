import LocationItem from "@components/location/location-item/location-item";

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

export default LocationList;
