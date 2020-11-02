import {extend} from "../../utils/utils";
import {ActionType} from "./../action";
import {CITIES, SortingType, NULL_ID} from "@const";

const cities = CITIES;
const defaultCity = CITIES[0];

const initialState = {
  city: defaultCity,
  sortingType: SortingType.POPULAR,
  hoverOfferCardId: NULL_ID,
  cities,
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.CHANGE_SORTING_TYPE:
      return extend(state, {
        sortingType: action.payload
      });
    case ActionType.CHANGE_HOVER_OFFER_CARD_ID:
      return extend(state, {
        hoverOfferCardId: action.payload
      });
  }
  return state;
};

export {appProcess};
