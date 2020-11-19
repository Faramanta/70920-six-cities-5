import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./header";
import {userData} from "../../mocks/mocks";

describe(`Header render correctly`, () => {
  it(`Header render correctly when user no auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              user={{}}
              authorizationStatus={`NO_AUTH`}
              onHeaderLinkClick={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Header render correctly when user auth`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Header
              user={userData}
              authorizationStatus={`AUTH`}
              onHeaderLinkClick={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
