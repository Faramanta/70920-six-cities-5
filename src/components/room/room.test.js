import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import {Room} from "./room";

const offer = {
  bedroomCount: 3,
  cityLocation: [52.370216, 4.895168],
  city: `Amsterdam`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  facilities: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  ownerName: `Angelina`,
  ownerAvatar: `img/1.png`,
  isSuper: true,
  id: 6,
  images: [`img/1.png`, `img/2.png`, `img/2.png`, `img/2.png`, `img/2.png`, `img/2.png`, `img/2.png`, `img/2.png`, `img/2.png`],
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
};
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
const comments = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: new Date(`Tue Oct 27 2020 12:29:21 GMT+0300`),
    id: 1,
    rating: 4,
    avatarUrl: `img/1.png`,
    userId: 4,
    isPro: false,
    name: `Max`
  }
];
const store = createStore(reducer);

jest.mock(`../map/map`, () => `Map`);

describe(`Room render correctly`, () => {
  it(`Room when user no auth & with comments`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Room
                offer={offer}
                offersNearby={offers}
                city={`Amsterdam`}
                currentOfferComments={comments}
                idCurrentOffer={6}
                onHeaderLinkClick={() => {}}
                loadCurrentOffer={() => {}}
                loadOffersNearby={() => {}}
                authorizationStatus={`NO_AUTH`}
                updateFavoriteStatus={() => {}}
                loadCurrentOfferComments={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Room when user no auth & with comments`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Room
                offer={offer}
                offersNearby={offers}
                city={`Amsterdam`}
                currentOfferComments={comments}
                idCurrentOffer={6}
                onHeaderLinkClick={() => {}}
                loadCurrentOffer={() => {}}
                loadOffersNearby={() => {}}
                authorizationStatus={`AUTH`}
                updateFavoriteStatus={() => {}}
                loadCurrentOfferComments={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Room when user auth & no comments`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Room
                offer={offer}
                offersNearby={offers}
                city={`Amsterdam`}
                currentOfferComments={[]}
                idCurrentOffer={6}
                onHeaderLinkClick={() => {}}
                loadCurrentOffer={() => {}}
                loadOffersNearby={() => {}}
                authorizationStatus={`AUTH`}
                updateFavoriteStatus={() => {}}
                loadCurrentOfferComments={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Room when user no auth & no comments`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Room
                offer={offer}
                offersNearby={offers}
                city={`Amsterdam`}
                currentOfferComments={[]}
                idCurrentOffer={6}
                onHeaderLinkClick={() => {}}
                loadCurrentOffer={() => {}}
                loadOffersNearby={() => {}}
                authorizationStatus={`NO_AUTH`}
                updateFavoriteStatus={() => {}}
                loadCurrentOfferComments={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Room when no offers nearby`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Room
                offer={offer}
                offersNearby={[]}
                city={`Amsterdam`}
                currentOfferComments={[]}
                idCurrentOffer={6}
                onHeaderLinkClick={() => {}}
                loadCurrentOffer={() => {}}
                loadOffersNearby={() => {}}
                authorizationStatus={`NO_AUTH`}
                updateFavoriteStatus={() => {}}
                loadCurrentOfferComments={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
