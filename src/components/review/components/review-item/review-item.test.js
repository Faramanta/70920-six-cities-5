import renderer from 'react-test-renderer';
import ReviewItem from "./review-item";

const comment = {
  comment: `What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river.`,
  date: new Date(`Thu Nov 12 2020 21:05:12 GMT+0500`),
  id: 1,
  rating: 4,
  avatarUrl: `img/1.png`,
  userId: 4,
  isPro: false,
  name: `Max`
};

it(`ReviewItem render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewItem comment={comment}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

