import {extend} from "../utils/utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES, SortingType} from "../const";

const cities = CITIES;
const defaultCity = CITIES[0];
const defaultOffers = offers.filter((offer) => offer.city === defaultCity);

const initialState = {
  activeCity: defaultCity,
  offers: defaultOffers,
  sortingType: SortingType.POPULAR,
  hoverOfferCardId: null,
  allOffers: offers,
  cities
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: state.allOffers.filter((offer) => offer.city === state.activeCity)
      });
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload
      });
    case ActionType.SORT_POPULAR:
      return extend(state, {
        offers: state.offers.filter((offer) => offer.city === state.activeCity)
      });
    case ActionType.SORT_LOW_TO_HIGH:
      return extend(state, {
        offers: state.offers.slice().sort((a, b) => a.price - b.price)
      });
    case ActionType.SORT_HIGH_TO_LOW:
      return extend(state, {
        offers: state.offers.slice().sort((a, b) => b.price - a.price)
      });
    case ActionType.SORT_TOP_RATED_FIRST:
      return extend(state, {
        offers: state.offers.slice().sort((a, b) => b.rating - a.rating)
      });
    case ActionType.SHANGE_HOVER_OFFER_CARD_ID:
      return extend(state, {
        hoverOfferCardId: action.payload
      });
  }
  return state;
};

export {reducer};
