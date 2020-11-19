import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {FavoritesCard} from "./favorites-card";
import {offer} from "../../../../mocks/mocks";

it(`FavoritesCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoritesCard
            favoriteOffer={offer}
            updateFavoriteStatus={() => {}}
          />
        </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
