import renderer from 'react-test-renderer';
import LocationList from "./location-list";

it(`LocationList render correctly`, () => {
  const tree = renderer.create(
      <LocationList
        cities={[`Amsterdam`, `Paris`]}
        changeCityAction={() => {}}
        activeCity={`Amsterdam`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

