import {connect} from "react-redux";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from "@components/main/main";
import SignIn from "@components/sign-in/sign-in";
import Favorites from "@components/favorites/favorites";
import Room from "@components/room/room";
import PrivateRoute from "../private-route/private-route";
import {ReviewsPropTypes, OffersPropTypes} from "@props";
import {sortedOffers} from "../../store/selectors";
import {AppRoute, AuthorizationStatus} from "@const";

const App = ({offers, city, reviews, hoverOfferCardId, authorizationStatus}) => {

  const onHeaderLinkClick = (evt, history) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }
    history.push(AppRoute.FAVORITES);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}
          render={({history}) => {
            return (
              <Main
                offers={offers}
                city={city}
                hoverOfferCardId={hoverOfferCardId}
                onHeaderLinkClick={(evt) => onHeaderLinkClick(evt, history)}
              />
            );
          }}
        />
        <Route exact path={AppRoute.LOGIN}
          render={({history}) => {
            return (
              <SignIn
                onHeaderLinkClick={(evt) => onHeaderLinkClick(evt, history)}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={({history}) => {
            return (
              <Favorites
                onHeaderLinkClick={(evt) => onHeaderLinkClick(evt, history)}
              />
            );
          }}
        />
        <Route
          exact
          path={AppRoute.ROOM}
          render={({history}) => {
            return (
              <Room
                offers={offers}
                reviews={reviews}
                onHeaderLinkClick={(evt) => onHeaderLinkClick(evt, history)}
              />
            );
          }}
        />
        <Route
          render={() => (
            <>
              <h1 style={{display: `block`, textAlign: `center`}}>Page not found</h1>
              <Link to={AppRoute.MAIN} style={{display: `block`, textAlign: `center`, marginTop: `30px`}}>Go to home</Link>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(ReviewsPropTypes).isRequired,
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  hoverOfferCardId: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({DATA, PROCESS, USER}) => ({
  city: PROCESS.city,
  cities: PROCESS.cities,
  reviews: DATA.reviews,
  hoverOfferCardId: PROCESS.hoverOfferCardId,
  offers: sortedOffers({DATA, PROCESS}),
  authorizationStatus: USER.authorizationStatus,
});

export {App};
export default connect(mapStateToProps)(App);
