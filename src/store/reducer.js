import {extend} from "../utils/utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES} from "../const";

// const defaultOffers = ;

const initialState = {
  activeCityIndex: 0,
  offers: offers.filter((offer) => offer.city === CITIES[0]),
  cities: CITIES
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCityIndex: action.payload
      });
    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers.filter((offer) => offer.city === state.cities[state.activeCityIndex])
      });
  }

  return state;
};

export {reducer};
