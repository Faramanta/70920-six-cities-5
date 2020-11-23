import leaflet from "leaflet";
import {OffersPropTypes} from "@props";
import {MapSettings} from "@const";

const Map = (props) => {
  const {offer, offers, city} = props;

  const mapRef = React.useRef(null);
  const mapRefNode = React.useRef(null);

  const currentCity = offers.find((offerItem) => offerItem.city === city);
  const cityCoordinate = [currentCity.cityLocation.latitude, currentCity.cityLocation.longitude];
  const cityZoom = currentCity.cityLocation.zoom;

  React.useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: cityCoordinate,
      zoom: cityZoom,
      zoomControl: true,
      marker: true,
      layers: [
        leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      ]
    });

    mapRefNode.current = leaflet.layerGroup().addTo(mapRef.current);
  }, []);

  React.useEffect(() => {
    mapRef.current.setView(cityCoordinate, cityZoom);
    mapRefNode.current.clearLayers();

    const icon = leaflet.icon({
      iconUrl: MapSettings.ICON_URL,
      iconSize: MapSettings.ICON_SIZE
    });

    const hoveredIcon = leaflet.icon({
      iconUrl: MapSettings.HOVER_ICON_URL,
      iconSize: MapSettings.ICON_SIZE
    });

    [...offers, offer]
      .map((offerItem) => {

        if (offerItem !== null) {
          const markerCoordinate = offerItem.coordinates;

          if (offerItem === offer) {
            leaflet
              .marker(markerCoordinate, {icon: hoveredIcon})
              .addTo(mapRefNode.current);

            return;
          }

          leaflet
            .marker(markerCoordinate, {icon})
            .addTo(mapRefNode.current);
        }
      });
  }, [offer, cityCoordinate]);

  return (
    <div
      ref={mapRef}
      id="map"
      style={{height: `100%`}}
    ></div>
  );
};

Map.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  hoveredOfferCard: OffersPropTypes,
  offer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.arrayOf(OffersPropTypes)
  ]),
};

export default Map;

