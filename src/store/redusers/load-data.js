import {extend} from "../../utils/utils";
import {ActionType} from "./../action";
import reviews from "../../mocks/reviews";

const initialState = {
  allOffers: [],
  offersNearby: [],
  favoriteOffers: [],
  currentOffer: [],
  currentOfferComments: []
};
console.log(initialState);
const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload
      });
    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload
      });
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favoriteOffers: action.payload
      });
    case ActionType.LOAD_CURRENT_OFFER:
      return extend(state, {
        currentOffer: action.payload
      });
    case ActionType.LOAD_CURRENT_OFFER_COMMENTS:
      return extend(state, {
        currentOfferComments: action.payload
      });
  }
  return state;
};

export {loadData};
