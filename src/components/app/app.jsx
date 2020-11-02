import {connect} from "react-redux";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from "@components/main/main";
import SignIn from "@components/sign-in/sign-in";
import Favorites from "@components/favorites/favorites";
import Room from "@components/room/room";
import {ReviewsPropTypes, OffersPropTypes} from "@props";
import {sortedOffers} from "../../store/selectors";

const App = ({offers, city, reviews, hoverOfferCardId}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offers={offers}
            city={city}
            hoverOfferCardId={hoverOfferCardId}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room
            offers={offers}
            reviews={reviews} />
        </Route>
        <Route
          render={() => (
            <>
              <h1 style={{display: `block`, textAlign: `center`}}>Page not found</h1>
              <Link to="/" style={{display: `block`, textAlign: `center`, marginTop: `30px`}}>Go to home</Link>
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
