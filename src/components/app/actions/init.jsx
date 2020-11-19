import {getOffersFromServer, checkAuth} from "@store/api-actions";

export const init = () => (dispatch, _getState) => {
  dispatch(getOffersFromServer());
  dispatch(checkAuth());
};
