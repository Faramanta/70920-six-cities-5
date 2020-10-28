import {SortingType} from "@const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filteredOffers = (sortName, activeCity, offers) => {
  const offersDefault = offers.filter((offer) => offer.city === activeCity);

  switch (sortName) {
    case SortingType.POPULAR:
      return offersDefault;

    case SortingType.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);

    case SortingType.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);

    case SortingType.TOP_RATED_FRIST:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return offersDefault;
};
