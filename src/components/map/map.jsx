import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {OffersPropTypes} from "@props";
import {MapSettings} from "@const";

class Map extends React.PureComponent {
  componentDidMount() {
    const {offers, city, hoverOfferCardId} = this.props;

    this._currentCity = offers.find((offerItem) => offerItem.city === city);

    const cityCoordinate = [this._currentCity.cityLocation.latitude, this._currentCity.cityLocation.longitude];
    const cityZoom = [this._currentCity.cityLocation.zoom];

    this._renderMap(cityCoordinate, cityZoom);

    this._renderMarker(offers, hoverOfferCardId);
  }

  componentDidUpdate() {
    const {offers, city, hoverOfferCardId} = this.props;

    if (this._currentCity.city !== city) {
      this._currentCity = offers.find((offerItem) => offerItem.city === city);

      const cityCoordinate = [this._currentCity.cityLocation.latitude, this._currentCity.cityLocation.longitude];
      const cityZoom = [this._currentCity.cityLocation.zoom];

      this.map.remove();

      this._renderMap(cityCoordinate, cityZoom);
    }

    this._renderMarker(offers, hoverOfferCardId);
  }

  _renderMap(cityCoordinates, cityZoom) {
    this.map = leaflet.map(MapSettings.MAP_CONTAINER_ID, {
      center: cityCoordinates,
      zoom: cityZoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(cityCoordinates, cityZoom);

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
        const markerCoordinate = [offer.location.latitude, offer.location.longitude];
        const icon = leaflet.icon({
          iconUrl: offer.id === hoverOfferCardId ? MapSettings.HOVER_ICON_URL : MapSettings.ICON_URL,
          iconSize: MapSettings.ICON_SIZE
        });
        leaflet
          .marker(markerCoordinate, {icon})
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
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  className: PropTypes.string,
  hoverOfferCardId: PropTypes.number
};

const mapStateToProps = ({PROCESS}) => ({
  hoverOfferCardId: PROCESS.hoverOfferCardId,
});

export {Map};
export default connect(mapStateToProps)(Map);

