import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingItem from "./sorting-item";

configure({adapter: new Adapter()});

it(`SortingItem click`, () => {
  const onSortItemClick = jest.fn();
  const wrapper = shallow(
      <SortingItem
        onSortItemClick={onSortItemClick}
        isActive={true}
      />
  );

  wrapper.find(`.places__option`).simulate(`click`);

  expect(onSortItemClick).toHaveBeenCalledTimes(1);
});
