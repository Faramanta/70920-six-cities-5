import {ActionType} from "@store/action";
import {user} from "./user";
import {userData} from "../../../mocks/mocks";
import {AuthorizationStatus} from "@const";

describe(`user reduser test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {}
    });
  });

  it(`Reducer require authorization`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer update user`, () => {
    expect(user({
      user: {},
    }, {
      type: ActionType.UPDATE_USER,
      payload: userData,
    })).toEqual({
      user: userData,
    });
  });
});
