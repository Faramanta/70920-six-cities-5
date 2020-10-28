import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from "@components/main/main";
import SignIn from "@components/sign-in/sign-in";
import Favorites from "@components/favorites/favorites";
import Room from "@components/room/room";
import {ReviewsPropTypes} from "@props";

const App = (props) => {
  const {reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id">
          <Room reviews={reviews} />
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
};

export default App;
