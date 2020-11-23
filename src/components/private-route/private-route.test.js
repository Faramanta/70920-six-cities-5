import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import PrivateRoute from "./private-route";

describe(`PrivateRoute render correctly`, () => {
  it(`PrivateRoute render correctly when user no auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              authorizationStatus={`NO_AUTH`}
              exact={true}
              path={`/favorites`}
              render={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
