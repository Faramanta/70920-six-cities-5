import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import {BrowserRouter} from 'react-router-dom';
import Main from "./main";

const offers = [{
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
},
  {
    bedroomCount: 3,
    cityLocation: [52.370216, 4.895168],
    city: `Paris`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    facilities: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    ownerName: `Angelina`,
    ownerAvatar: `img/1.png`,
    isSuper: true,
    id: 2,
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
