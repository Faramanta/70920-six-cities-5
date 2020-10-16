import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import {OffersPropTypes, ReviewsPropTypes} from "Props";

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room offers={offers} reviews={reviews} />
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
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewsPropTypes).isRequired,
};

export default App;
