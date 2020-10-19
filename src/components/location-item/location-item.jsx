const LocationItem = (props) => {
  const {city, className, onLocationItemClick} = props;

  return (
    <li className="locations__item" >
      <a className={`locations__item-link tabs__item ${className}`} href="#" onClick={onLocationItemClick} >
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  onLocationItemClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LocationItem;
