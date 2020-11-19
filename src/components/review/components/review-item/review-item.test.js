import renderer from 'react-test-renderer';
import ReviewItem from "./review-item";
import {comment} from "../../../../mocks/mocks";

it(`ReviewItem render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem comment={comment}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

