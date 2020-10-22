import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {OffersPropTypes} from "Props";
import {DEFAULT_CITY, ICON_URL, HOVER_ICON_URL, ICON_SIZE, MAP_CONTAINER_ID} from "../../const";

class Map extends React.PureComponent {
  componentDidMount() {
    this._renderMap();
  }

  componentDidUpdate() {
    this._removeMap();
    this._renderMap();
  }

  _renderMap() {
    const {offers, hoverOfferCardId} = this.props;
    const coordsHoverOfferCardId = offers.filter((offer) => offer.id === hoverOfferCardId).map((offer) => offer.coordinates);
    const coordsNotHoverOfferCardId = offers.filter((offer) => offer.id !== hoverOfferCardId).map((offer) => offer.coordinates);

    // Конфигурация leaflet
    const defaultIcon = leaflet.icon({
      iconUrl: ICON_URL,
      iconSize: ICON_SIZE
    });

    const activeIcon = leaflet.icon({
      iconUrl: HOVER_ICON_URL,
      iconSize: ICON_SIZE
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

    // отрисовка маркера
    coordsNotHoverOfferCardId.forEach((offerCords) =>
      leaflet
        .marker(offerCords, {icon: defaultIcon})
        .addTo(this.map)
    );
    if (coordsHoverOfferCardId.length > 0) {
      coordsHoverOfferCardId.forEach((offerCords) =>
        leaflet
          .marker(offerCords, {icon: activeIcon})
          .addTo(this.map)
      );
    }
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
  className: PropTypes.string,
  hoverOfferCardId: PropTypes.number
};

const mapStateToProps = (state) => ({
  hoverOfferCardId: state.hoverOfferCardId
});

export {Map};
export default connect(mapStateToProps)(Map);
