// import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {OffersPropTypes} from "Props";
import {MapSettings} from "../../const";

class Map extends React.PureComponent {
  componentDidMount() {
    const {offers, activeCity, hoverOfferCardId} = this.props;
    this._currentCity = offers.find((offerItem) => offerItem.city === activeCity);

    this._renderMap(MapSettings.DEFAULT_CITY_COORDS);

    this._renderMarker(offers, hoverOfferCardId);
  }

  componentDidUpdate() {
    const {offers, activeCity, hoverOfferCardId} = this.props;

    if (this._currentCity.city !== activeCity) {
      this._currentCity = offers.find((offerItem) => offerItem.city === activeCity);

      this.map.remove();

      this._renderMap(this._currentCity.coordinates);
    }

    this._renderMarker(offers, hoverOfferCardId);
  }

  _renderMap(cityCoordinates) {
    this.map = leaflet.map(MapSettings.MAP_CONTAINER_ID, {
      center: cityCoordinates,
      zoom: MapSettings.ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(cityCoordinates, MapSettings.ZOOM);

    // Подключение слоя карты
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  _renderMarker(offers, hoverOfferCardId) {
    offers
      .map((offer) => {
        const icon = leaflet.icon({
          iconUrl: offer.id === hoverOfferCardId ? MapSettings.HOVER_ICON_URL : MapSettings.ICON_URL,
          iconSize: MapSettings.ICON_SIZE
        });
        leaflet
          .marker(offer.coordinates, {icon})
          .addTo(this.map);
      });
  }

  render() {
    const {className} = this.props;
    return (
      <section className={`map ${className}`} id="map"></section>
    );
  }
}

Map.propTypes = {
  activeCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  className: PropTypes.string,
  hoverOfferCardId: PropTypes.number
};

export default Map;
