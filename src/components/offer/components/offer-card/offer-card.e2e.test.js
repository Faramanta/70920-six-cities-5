import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {offer} from "../../../../mocks/mocks";

configure({adapter: new Adapter()});

describe(`OfferCard e2e testing`, () => {
  it(`OfferCard hover and blur`, () => {
    const onOfferCardHover = jest.fn();
    const wrapper = shallow(
        <OfferCard
          offer={offer}
          onOfferCardHover={onOfferCardHover}
          onFavoriteButtonClick={() => {}}
          updateFavoriteStatus={() => {}}
        />
    );

    wrapper.find(`.place-card`).simulate(`mouseover`);

    expect(onOfferCardHover).toHaveBeenCalledTimes(1);
  });

  it(`OfferCard click favorite button`, () => {
    const updateFavoriteStatus = jest.fn();
    const wrapper = shallow(
        <OfferCard
          offer={offer}
          onOfferCardHover={() => {}}
          onFavoriteButtonClick={() => {}}
          updateFavoriteStatus={updateFavoriteStatus}
        />
    );

    wrapper.find(`.place-card__bookmark-button`).simulate(`click`);

    expect(updateFavoriteStatus).toHaveBeenCalledTimes(1);
  });
});
