export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_TOP_RATED_FIRST: `SORT_TOP_RATED_FIRST`,
  CHANGE_HOVER_OFFER_CARD_ID: `CHANGE_HOVER_OFFER_CARD_ID`,
  CHANGE_FILTER: `CHANGE_FILTER`
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
  changeFilter: () => ({
    type: ActionType.CHANGE_FILTER,
  }),
  changeHoverOfferCardId: (id) => ({
    type: ActionType.CHANGE_HOVER_OFFER_CARD_ID,
    payload: id
  })
};
