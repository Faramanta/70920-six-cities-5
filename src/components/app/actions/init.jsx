import {getOffersFromServer, checkAuth} from "@store/api-actions";

export const init = (dispatch) => {
  return Promise.resolve(
      Promise.all([
        dispatch(getOffersFromServer()),
        dispatch(checkAuth()),
      ])
  );
};
