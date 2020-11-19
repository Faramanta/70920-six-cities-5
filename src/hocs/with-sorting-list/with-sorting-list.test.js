import renderer from 'react-test-renderer';
import {Fragment} from 'react';
import withOpenSortingList from "./with-sorting-list";

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

const MockComponentWrapped = withOpenSortingList(MockComponent);

it(`withOpenSortingList is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isOpen={false}
      onOpenList={() => {}}
    >
      <Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
