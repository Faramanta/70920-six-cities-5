export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`
};

export const ActionCreator = {
  changeCity: (activeCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: activeCity
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
  })
};
