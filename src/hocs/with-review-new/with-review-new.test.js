import renderer from 'react-test-renderer';
import {Fragment} from 'react';
import withReviewNew from "./with-review-new";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withReviewNew(MockComponent);

it(`withReviewNew is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      rating={``}
      review={``}
      onChange={() => {}}
      changeDisabledFormStatus={() => {}}
      resetForm={() => {}}
      isDisabled={false}
    >
      <Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
