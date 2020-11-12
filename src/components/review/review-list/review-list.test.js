import renderer from 'react-test-renderer';
import ReviewList from "./review-list";

const comments = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: new Date(`Tue Oct 27 2020 12:29:21 GMT+0300`),
    id: 1,
    rating: 4,
    avatarUrl: `img/1.png`,
    userId: 4,
    isPro: false,
    name: `Max`
  }
];

it(`ReviewList render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewList
          currentOfferComments={comments}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
