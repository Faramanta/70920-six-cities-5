export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`
};

export const ActionCreator = {
  changeCity: (index) => ({
    type: ActionType.CHANGE_CITY,
    payload: index
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
    payload: []
  })
};
