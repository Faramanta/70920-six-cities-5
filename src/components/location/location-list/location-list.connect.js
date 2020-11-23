import LocationList from "./location-list";
import {connect} from "react-redux";
import {changeCity} from "@store/action";

const mapStateToProps = ({PROCESS}) => ({
  cities: PROCESS.cities,
  activeCity: PROCESS.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(activeCity) {
    dispatch(changeCity(activeCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
