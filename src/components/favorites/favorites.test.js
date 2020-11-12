import renderer from 'react-test-renderer';
import {Favorites} from "./favorites";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from "@store/redusers/root-reducer";

const favoriteOffers = [{
  bedroomCount: 3,
  cityLocation: [52.370216, 4.895168],
  city: `Amsterdam`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  facilities: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  ownerName: `Angelina`,
  ownerAvatar: `img/1.png`,
  isSuper: true,
  id: 1,
  images: [`img/1.png`, `img/2.png`],
  isFavorite: false,
  isPremium: false,
  coordinates: [52.35514938496378, 4.673877537499948],
  zoom: 8,
  guestCount: 4,
  previewImage: `img/1.png`,
  price: 120,
  rating: 4.8,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`
}];
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
                loadFavorites={() => {}}
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
                loadFavorites={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
