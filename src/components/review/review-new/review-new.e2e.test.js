import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewNew from "./review-new";

configure({adapter: new Adapter()});

it(`ReviewNew submit`, () => {
  const onSubmitAction = jest.fn();
  const wrapper = mount(
      <ReviewNew
        idCurrentOffer={6}
        onSubmitAction={onSubmitAction}
      />
  );

  wrapper.find(`.form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmitAction).toHaveBeenCalledTimes(0);
});
