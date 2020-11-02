export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_TOP_RATED_FIRST: `SORT_TOP_RATED_FIRST`,
  CHANGE_HOVER_OFFER_CARD_ID: `CHANGE_HOVER_OFFER_CARD_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const changeSortingType = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType
});

export const changeHoverOfferCardId = (id) => ({
  type: ActionType.CHANGE_HOVER_OFFER_CARD_ID,
  payload: id
});

export const loadOffers = (hotels) => ({
  type: ActionType.LOAD_OFFERS,
  payload: hotels,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
