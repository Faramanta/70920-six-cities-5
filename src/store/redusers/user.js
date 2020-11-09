import {extend} from "@utils/utils";
import {AuthorizationStatus} from "@const";
import {ActionType} from "./../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.UPDATE_USER:
      return extend(state, {
        user: action.payload,
      });
  }
  return state;
};

export {user};
