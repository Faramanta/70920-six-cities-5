import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from "@store/redusers/root-reducer";
import FavoritesList from './favorites-list';
import {favoriteOffers} from "../../../mocks/mocks";

const store = createStore(reducer);

describe(`FavoritesList render correctly`, () => {
  it(`FavoritesList empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <FavoritesList
                favoriteOffersInCity={[]}
                city={``}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`FavoritesList not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <FavoritesList
                favoriteOffersInCity={favoriteOffers}
                city={`Amsterdam`}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
