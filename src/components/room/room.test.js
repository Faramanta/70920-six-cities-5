import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "@store/redusers/root-reducer";
import {Room} from "./room";
import {offer, offers, comments} from "../../mocks/mocks";

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
                resetActiveOffer={() => {}}
                getCurrentOfferAction={() => {}}
                getOffersNearbyAction={() => {}}
                authorizationStatus={`NO_AUTH`}
                updateFavoriteStatus={() => {}}
                getCurrentOfferCommentsAction={() => {}}
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
                resetActiveOffer={() => {}}
                getCurrentOfferAction={() => {}}
                getOffersNearbyAction={() => {}}
                authorizationStatus={`AUTH`}
                updateFavoriteStatus={() => {}}
                getCurrentOfferCommentsAction={() => {}}
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
                resetActiveOffer={() => {}}
                getCurrentOfferAction={() => {}}
                getOffersNearbyAction={() => {}}
                authorizationStatus={`AUTH`}
                updateFavoriteStatus={() => {}}
                getCurrentOfferCommentsAction={() => {}}
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
                resetActiveOffer={() => {}}
                getCurrentOfferAction={() => {}}
                getOffersNearbyAction={() => {}}
                authorizationStatus={`NO_AUTH`}
                updateFavoriteStatus={() => {}}
                getCurrentOfferCommentsAction={() => {}}
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
                resetActiveOffer={() => {}}
                getCurrentOfferAction={() => {}}
                getOffersNearbyAction={() => {}}
                authorizationStatus={`NO_AUTH`}
                updateFavoriteStatus={() => {}}
                getCurrentOfferCommentsAction={() => {}}
              />
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
