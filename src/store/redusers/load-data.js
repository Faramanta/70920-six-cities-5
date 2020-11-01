import {extend} from "../../utils/utils";
import {ActionType} from "./../action";
import reviews from "../../mocks/reviews";

const initialState = {
  allOffers: [],
  reviews
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload
      });
  }
  return state;
};

export {loadData};
