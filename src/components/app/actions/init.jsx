import {getOffersFromServer, checkAuth} from "@store/api-actions";

export const init = (dispatch, _getState) => {
  return Promise.resolve(
      Promise.all([
        dispatch(getOffersFromServer()),
        dispatch(checkAuth()),
      ])
  );
};
