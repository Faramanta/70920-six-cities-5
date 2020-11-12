import renderer from 'react-test-renderer';
import OfferListEmpty from "./offer-list-empty";

it(`OfferListEmpty render correctly`, () => {
  const tree = renderer
    .create(
        <OfferListEmpty/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
