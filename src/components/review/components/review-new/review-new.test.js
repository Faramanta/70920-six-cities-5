import renderer from 'react-test-renderer';
import {ReviewNew} from "./review-new";

describe(`ReviewNew render correctly`, () => {
  it(`ReviewNew all fields are filled`, () => {
    const tree = renderer
      .create(
          <ReviewNew
            idCurrentOffer={4}
            review={`What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river`}
            rating={`4`}
            onSubmitAction={() => {}}
            onChange={() => {}}
            changeDisabledFormStatus={() => {}}
            resetForm={() => {}}
            isDisabled={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewNew rating field empty`, () => {
    const tree = renderer
      .create(
          <ReviewNew
            idCurrentOffer={4}
            review={`What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river`}
            rating={``}
            onSubmitAction={() => {}}
            onChange={() => {}}
            changeDisabledFormStatus={() => {}}
            resetForm={() => {}}
            isDisabled={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewNew review field empty`, () => {
    const tree = renderer
      .create(
          <ReviewNew
            idCurrentOffer={4}
            review={``}
            rating={`4`}
            onSubmitAction={() => {}}
            onChange={() => {}}
            changeDisabledFormStatus={() => {}}
            resetForm={() => {}}
            isDisabled={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewNew all field empty`, () => {
    const tree = renderer
      .create(
          <ReviewNew
            idCurrentOffer={4}
            review={``}
            rating={``}
            onSubmitAction={() => {}}
            onChange={() => {}}
            changeDisabledFormStatus={() => {}}
            resetForm={() => {}}
            isDisabled={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewNew very short review`, () => {
    const tree = renderer
      .create(
          <ReviewNew
            idCurrentOffer={4}
            review={`very short text`}
            rating={`4`}
            onSubmitAction={() => {}}
            onChange={() => {}}
            changeDisabledFormStatus={() => {}}
            resetForm={() => {}}
            isDisabled={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ReviewNew very long review`, () => {
    const tree = renderer
      .create(
          <ReviewNew
            idCurrentOffer={4}
            review={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
            rating={`4`}
            onSubmitAction={() => {}}
            onChange={() => {}}
            changeDisabledFormStatus={() => {}}
            resetForm={() => {}}
            isDisabled={false}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
