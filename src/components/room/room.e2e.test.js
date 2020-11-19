import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Room} from "./room";
import {offer, offers, comments} from "../../mocks/mocks";

configure({adapter: new Adapter()});

it(`Room favorite button click`, () => {
  const updateFavoriteStatus = jest.fn();
  const wrapper = shallow(
      <Room
        currentOfferComments={comments}
        offersNearby={offers}
        offer={offer}
        city={`Amsterdam`}
        idCurrentOffer={1}
        onHeaderLinkClick={() => {}}
        loadCurrentOffer={() => {}}
        loadOffersNearby={() => {}}
        authorizationStatus={`NO_AUTH`}
        updateFavoriteStatus={updateFavoriteStatus}
        onFavoriteButtonClick={() => {}}
        loadCurrentOfferComments={() => {}}
      />
  );

  wrapper.find(`.property__bookmark-button`).simulate(`click`, {preventDefault: () => {}});

  expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
});
