import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {OfferCard} from "./offer-card";
import {offer} from "../../../../mocks/mocks";

describe(`OfferCard render correctly`, () => {
  it(`OfferCard no favorite`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <OfferCard
              offer={offer}
              isFavorite={false}
              onOfferCardHover={() => {}}
              updateFavoriteStatus={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`OfferCard favorite`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <OfferCard
              offer={offer}
              isFavorite={true}
              onOfferCardHover={() => {}}
              updateFavoriteStatus={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
