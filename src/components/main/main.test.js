import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import {BrowserRouter} from 'react-router-dom';
import Main from "./main";
import {offers} from "../../mocks/mocks";

const store = createStore(reducer);

jest.mock(`../map/map`, () => `Map`);

describe(`Main render correctly`, () => {
  it(`Main `, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Main
                city={`Amsterdam`}
                offers={offers}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
