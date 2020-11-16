import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import {offers} from "../../mocks/mocks";

import {App} from "./app";

const store = createStore(reducer);

jest.mock(`../map/map`, () => `Map`);

it(`App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            offers={offers}
            city={`Amsterdam`}
            hoverOfferCardId={1}
            authorizationStatus={`NO_AUTH`}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
