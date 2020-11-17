import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesCard} from "./favorites-card";
import {offer} from "../../../../mocks/mocks";

configure({adapter: new Adapter()});

it(`FavoritesCard click favorite button`, () => {
  const updateFavoriteStatus = jest.fn();
  const wrapper = shallow(
      <FavoritesCard
        favoriteOffer={offer}
        updateFavoriteStatus={updateFavoriteStatus}
      />
  );

  const buttonFavorite = wrapper.find(`.place-card__bookmark-button`);
  buttonFavorite.simulate(`click`);

  expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
});

