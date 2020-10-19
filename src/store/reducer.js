import {extend} from "../utils/utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES} from "../const";

const cities = CITIES;
const defaultCity = CITIES[0];
const defaultOffers = offers.filter((offer) => offer.city === CITIES[0]);

const initialState = {
  activeCity: defaultCity,
  offers: defaultOffers,
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
        offers: offers.filter((offer) => offer.city === state.activeCity)
      });
  }

  return state;
};

export {reducer};
