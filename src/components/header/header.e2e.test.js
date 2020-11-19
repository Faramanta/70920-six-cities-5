import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Header} from "./header";
import {userData} from "../../mocks/mocks";

configure({adapter: new Adapter()});

describe(`Header e2e testing`, () => {
  it(`Header signUp link click`, () => {
    const onHeaderLinkClick = jest.fn();
    const wrapper = shallow(
        <Header
          user={userData}
          authorizationStatus={`NO_AUTH`}
          onHeaderLinkClick={onHeaderLinkClick}
        />
    );

    const headerLink = wrapper.find(`.header__nav-link`);
    headerLink.simulate(`click`, {preventDefault: () => {}});

    expect(onHeaderLinkClick).toHaveBeenCalledTimes(1);
  });

  it(`Header user link click`, () => {
    const onHeaderLinkClick = jest.fn();
    const wrapper = shallow(
        <Header
          user={userData}
          authorizationStatus={`AUTH`}
          onHeaderLinkClick={onHeaderLinkClick}
        />
    );

    const headerLink = wrapper.find(`.header__nav-link`);
    headerLink.simulate(`click`, {preventDefault: () => {}});

    expect(onHeaderLinkClick).toHaveBeenCalledTimes(1);
  });
});
