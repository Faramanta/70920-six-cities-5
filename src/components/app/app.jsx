import {connect} from "react-redux";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from "@components/main/main";
import SignIn from "@components/sign-in/sign-in";
import FavoriteList from "@components/favorites/favorites";
import Room from "@components/room/room";
import PrivateRoute from "../private-route/private-route";
import {OffersPropTypes} from "@props";
import {sortedOffers} from "../../store/selectors";
import {AppRoute} from "@const";
import {handleHeaderLinkClick, handleFavoriteButtonClick} from "@utils/utils";
import {init} from "./actions/init";
import browserHistory from '../../browser-history';

const App = (props) => {
  const {initialLoad, offers, city} = props;

  const [isDataLoad, setDataStatus] = React.useState(false);

  React.useEffect(() => {
    initialLoad().then(() => {
      setDataStatus(true);
    });
  }, []);

  if (!isDataLoad) {
    return (
      <div style={{position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
        <p style={{display: `block`, textAlign: `center`, fontSize: `34px`}}>Loading...</p>
      </div>
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          render={({history}) => {
            return (
              <Main
                offers={offers}
                city={city}
                onHeaderLinkClick={(authorizationStatus) => handleHeaderLinkClick(history, authorizationStatus)}
                onFavoriteButtonClick={(authorizationStatus) => handleFavoriteButtonClick(history, authorizationStatus)}
              />
            );
          }}
        />
        <Route exact path={AppRoute.LOGIN}
          render={({history}) => {
            return (
              <SignIn
                onHeaderLinkClick={(authorizationStatus) => handleHeaderLinkClick(history, authorizationStatus)}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={({history}) => {
            return (
              <FavoriteList
                onHeaderLinkClick={(authorizationStatus) => handleHeaderLinkClick(history, authorizationStatus)}
              />
            );
          }}
        />
        <Route
          exact
          path={`${AppRoute.ROOM}:id`}
          render={({history}) => {
            return (
              <Room
                onHeaderLinkClick={(authorizationStatus) => handleHeaderLinkClick(history, authorizationStatus)}
                onFavoriteButtonClick={(authorizationStatus) => handleFavoriteButtonClick(history, authorizationStatus)}
              />
            );
          }}
        />
        <Route
          render={() => (
            <div style={{position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
              <h1 style={{display: `block`, textAlign: `center`}}>Page not found</h1>
              <Link to={AppRoute.MAIN} style={{display: `block`, textAlign: `center`, marginTop: `30px`, color: `#4481c3`, fontSize: `21px`}}>Go to home</Link>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  initialLoad: PropTypes.func.isRequired
};

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

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
