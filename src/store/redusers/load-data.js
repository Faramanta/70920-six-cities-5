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
    case ActionType.UPDATE_MAIN_OFFER_FAVORITE_STATUS:
      const index = state.allOffers.findIndex((offer) => offer.id === action.payload.id);
      return extend(state, {
        allOffers: [
          ...state.allOffers.slice(0, index),
          action.payload,
          ...state.allOffers.slice(index + 1)
        ]
      });
    case ActionType.UPDATE_CURRENT_OFFER_FAVORITE_STATUS:
      return extend(state, {
        currentOffer: action.payload
      });
    case ActionType.UPDATE_NEARBY_OFFER_FAVORITE_STATUS:
      const indexNearby = state.offersNearby.findIndex((offer) => offer.id === action.payload.id);
      return extend(state, {
        offersNearby: [
          ...state.offersNearby.slice(0, indexNearby),
          action.payload,
          ...state.offersNearby.slice(indexNearby + 1)
        ]
      });
  }
  return state;
};

export {loadData};
