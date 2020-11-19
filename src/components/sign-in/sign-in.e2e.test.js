import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from "@store/redusers/root-reducer";
import {userAuthData} from "../../mocks/mocks";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`SignIn form submit`, () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn
            onHeaderLinkClick={() => {}}
            onSubmit={onSubmit}
            authorizationStatus={`NO_AUTH`}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`input[type="email"]`).instance().value = userAuthData.login;
  wrapper.find(`input[type="password"]`).instance().value = userAuthData.password;
  wrapper.find(`.login__form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
