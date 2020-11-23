import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import SignIn from "./sign-in";
import {createStore} from 'redux';
import reducer from "@store/redusers/root-reducer";

const store = createStore(reducer);

describe(`SignIn render correctly`, () => {
  it(`SignIn when user no auth`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <SignIn
                onHeaderLinkClick={() => {}}
                onSubmit={() => {}}
                authorizationStatus={`NO_AUTH`}/>
            </BrowserRouter>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
