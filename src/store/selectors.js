import {createSelector} from "reselect";
import {SortingType} from "@const";

const getSortingType = (({PROCESS}) => PROCESS.sortingType);
const getCity = (({PROCESS}) => PROCESS.city);
const getAllOffers = (({DATA}) => DATA.allOffers);

export const sortedOffers = createSelector([getSortingType, getCity, getAllOffers], (sortingType, city, allOffers) => {
  const offersDefault = allOffers.filter((offer) => offer.city === city);

  switch (sortingType) {
    case SortingType.POPULAR:
      return offersDefault;

    case SortingType.LOW_TO_HIGH:
      return offersDefault.slice().sort((a, b) => a.price - b.price);

    case SortingType.HIGH_TO_LOW:
      return offersDefault.slice().sort((a, b) => b.price - a.price);

    case SortingType.TOP_RATED_FRIST:
      return offersDefault.slice().sort((a, b) => b.rating - a.rating);
  }

  return offersDefault;
});
