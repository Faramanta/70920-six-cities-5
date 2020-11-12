import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Header} from "./header";

const UserData = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

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
              user={UserData}
              authorizationStatus={`AUTH`}
              onHeaderLinkClick={() => {}}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
