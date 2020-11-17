import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewNew} from "./review-new";

configure({adapter: new Adapter()});

it(`ReviewNew submit`, () => {
  const onSubmitAction = jest.fn(() => {
    return Promise.resolve(jest.fn());
  });
  const wrapper = shallow(
      <ReviewNew
        idCurrentOffer={1}
        review={`comment text`}
        rating={`4`}
        onSubmitAction={onSubmitAction}
        onChange={() => {}}
        changeDisabledFormStatus={() => {}}
        resetForm={() => {}}
        isDisabled={false}
      />
  );

  wrapper.find(`.form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmitAction).toHaveBeenCalledTimes(1);
});
