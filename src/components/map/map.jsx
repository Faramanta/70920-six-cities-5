import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {OffersPropTypes} from "Props";
import {DEFAULT_CITY, ICON_URL, MAP_CONTAINER_ID} from "../../const";

export default class Map extends React.PureComponent {
  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this._removeMap();
    this._renderMap();
  }

  _renderMap() {
    const {offers} = this.props;
    const offersCords = offers.map((offer) => offer.coordinates);

    // Конфигурация leaflet
    const icon = leaflet.icon({
      iconUrl: ICON_URL,
      iconSize: [27, 39]
    });

    // Инициализация карты и фокус на DEFAULT_CITY
    const zoom = 12;
    this.map = leaflet.map(MAP_CONTAINER_ID, {
      center: DEFAULT_CITY,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(DEFAULT_CITY, zoom);

    // Подключение слоя карты
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    // const offerCords = [52.3709553943508, 4.89309666406198];
    offersCords.forEach((offerCords) =>
      leaflet
        .marker(offerCords, {icon})
        .addTo(this.map)
    );
  }

  _removeMap() {
    this.map.remove();
  }

  render() {
    const {className} = this.props;
    return (
      <section className={`map ${className}`} id="map"></section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  className: PropTypes.string
};

