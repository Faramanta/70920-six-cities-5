import App from "@components/app/app";
import {connect} from "react-redux";
import {sortedOffers} from "../../store/selectors";
import {init} from "./actions/init";

const mapStateToProps = ({DATA, PROCESS, USER}) => ({
  city: PROCESS.city,
  cities: PROCESS.cities,
  reviews: DATA.reviews,
  offers: sortedOffers({DATA, PROCESS}),
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  initialLoad: () => init(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
