import renderer from 'react-test-renderer';
import {Map} from "./map";
import {offers} from "../../mocks/mocks";

it(`Map render correctly`, () => {
  const tree = renderer
    .create(
        <Map
          offers={offers}
          city={`Amsterdam`}
          hoverOfferCardId={1}

        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

