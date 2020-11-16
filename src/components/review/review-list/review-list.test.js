import renderer from 'react-test-renderer';
import ReviewList from "./review-list";
import {comments} from "../../../mocks/mocks";

it(`ReviewList render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewList
          currentOfferComments={comments}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
