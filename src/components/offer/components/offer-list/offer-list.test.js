import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import {OfferList} from "./offer-list";
import {offers} from "../../../../mocks/mocks";

const store = createStore(reducer);

it(`OfferList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferList
              offers={offers}
              changeHoverOfferCardIdAction={() => {}}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
