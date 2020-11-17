import {extend, updateArray} from "@utils/utils";
import {ActionType} from "./../../action";

const initialState = {
  allOffers: [],
  offersNearby: [],
  favoriteOffers: [],
  currentOffer: [],
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
      return extend(state, {
        allOffers: updateArray(action.payload, state.allOffers),
        currentOffer: action.payload,
        offersNearby: updateArray(action.payload, state.offersNearby),
        favoriteOffers: state.favoriteOffers.slice(0).filter((offer) => offer.id !== action.payload.id)
      });
  }
  return state;
};

export {loadData};
