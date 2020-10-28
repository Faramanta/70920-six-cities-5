import {extend, filteredOffers} from "../utils/utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES, SortingType} from "@const";

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
    case ActionType.CHANGE_FILTER:
      return extend(state, {
        offers: filteredOffers(state.sortingType, state.activeCity, state.offers)
      });
    case ActionType.CHANGE_HOVER_OFFER_CARD_ID:
      return extend(state, {
        hoverOfferCardId: action.payload
      });
  }
  return state;
};

export {reducer};
