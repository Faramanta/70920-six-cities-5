export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_TOP_RATED_FIRST: `SORT_TOP_RATED_FIRST`,
  SHANGE_HOVER_OFFER_CARD_ID: `SHANGE_HOVER_OFFER_CARD_ID`
};

export const ActionCreator = {
  changeCity: (activeCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: activeCity
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
  }),
  changeSortingType: (sortingType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: sortingType
  }),
  sortPopular: () => ({
    type: ActionType.SORT_POPULAR,
  }),
  sortLowToHigh: () => ({
    type: ActionType.SORT_LOW_TO_HIGH,
  }),
  sortHighToLow: () => ({
    type: ActionType.SORT_HIGH_TO_LOW,
  }),
  sortTopRatedFirst: () => ({
    type: ActionType.SORT_TOP_RATED_FIRST,
  }),
  changeHoverOfferCardId: (id) => ({
    type: ActionType.SHANGE_HOVER_OFFER_CARD_ID,
    payload: id
  })
};
