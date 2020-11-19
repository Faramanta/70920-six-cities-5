import renderer from 'react-test-renderer';
import LocationItem from "./location-item";

it(`LocationItem render correctly`, () => {
  const tree = renderer.create(
      <LocationItem
        city={`Amsterdam`}
        onLocationItemClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
