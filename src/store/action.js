export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  SORT_POPULAR: `SORT_POPULAR`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_TOP_RATED_FIRST: `SORT_TOP_RATED_FIRST`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`,
  LOAD_CURRENT_OFFER: `LOAD_CURRENT_OFFER`,
  LOAD_CURRENT_OFFER_COMMENTS: `LOAD_CURRENT_OFFER_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  REMOVE_FAVORITES: `REMOVE_FAVORITES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  UPDATE_USER: `UPDATE_USER`,
  ADD_NEW_COMMENT: `ADD_NEW_COMMENT`,
  UPDATE_FAVORITE_STATUS: `UPDATE_FAVORITE_STATUS`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const changeSortingType = (sortingType) => ({
  type: ActionType.CHANGE_SORTING_TYPE,
  payload: sortingType
});

export const loadOffers = (hotels) => ({
  type: ActionType.LOAD_OFFERS,
  payload: hotels,
});

export const loadOffersNearby = (hotels) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: hotels,
});

export const loadFavorites = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favoriteOffers,
});

export const updateFavoriteStatus = (favoriteOffer) => ({
  type: ActionType.UPDATE_FAVORITE_STATUS,
  payload: favoriteOffer,
});

export const loadCurrentOffer = (currentOffer) => ({
  type: ActionType.LOAD_CURRENT_OFFER,
  payload: currentOffer,
});

export const loadCurrentOfferComments = (currentOfferComments) => ({
  type: ActionType.LOAD_CURRENT_OFFER_COMMENTS,
  payload: currentOfferComments,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const updateUser = (userInformation) => ({
  type: ActionType.UPDATE_USER,
  payload: userInformation
});
