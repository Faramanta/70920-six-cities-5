import {extend, getIndex, getNewArray} from "@utils/utils";
import {ActionType} from "./../../action";

const initialState = {
  allOffers: [],
  offersNearby: [],
  favoriteOffers: [],
  currentOffer: null,
  currentOfferComments: []
};

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
    case ActionType.UPDATE_FAVORITE_STATUS:
      const result = {};
      let index = getIndex(action.payload, state.allOffers);
      if (index !== -1) {
        result.allOffers = getNewArray(action.payload, state.allOffers, index);
      }

      index = getIndex(action.payload, state.offersNearby);
      if (index !== -1) {
        result.offersNearby = getNewArray(action.payload, state.offersNearby, index);
      }

      if (state.currentOffer.id === action.payload.id) {
        result.currentOffer = action.payload;
      }

      result.favoriteOffers = state.favoriteOffers.slice(0).filter((offer) => offer.id !== action.payload.id);

      return extend(state, result);
  }
  return state;
};

export {loadData};
