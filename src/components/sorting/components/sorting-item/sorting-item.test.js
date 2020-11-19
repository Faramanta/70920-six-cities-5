import renderer from 'react-test-renderer';
import SortingItem from "./sorting-item";

describe(`SortingItem render correctly`, () => {
  it(`SortingItem isActive`, () => {
    const tree = renderer
      .create(
          <SortingItem
            onSortItemClick={() => {}}
            isActive={true}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SortingItem no active`, () => {
    const tree = renderer
      .create(
          <SortingItem
            onSortItemClick={() => {}}
            isActive={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
