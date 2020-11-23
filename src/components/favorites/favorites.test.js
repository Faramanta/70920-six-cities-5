import renderer from 'react-test-renderer';
import {Favorites} from "./favorites";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from "@store/redusers/root-reducer";
import {favoriteOffers} from "../../mocks/mocks";

const store = createStore(reducer);

describe(`Favorites render correctly`, () => {
  it(`Favorites empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Favorites
                favoriteOffers={[]}
                onHeaderLinkClick={() => {}}
                getFavoriteOfferAction={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Favorites not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Favorites
                favoriteOffers={favoriteOffers}
                onHeaderLinkClick={() => {}}
                getFavoriteOfferAction={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
