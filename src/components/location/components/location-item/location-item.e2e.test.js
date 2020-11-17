import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LocationItem from "./location-item";

configure({adapter: new Adapter()});

it(`LocationItem click`, () => {
  const onLocationItemClick = jest.fn();
  const wrapper = shallow(
      <LocationItem
        city={`Amsterdam`}
        onLocationItemClick={onLocationItemClick}
      />
  );

  wrapper.find(`.locations__item-link`).simulate(`click`);

  expect(onLocationItemClick).toHaveBeenCalledTimes(1);
});
