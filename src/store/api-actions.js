import {loadOffers, requireAuthorization} from "./action";
import {AuthorizationStatus} from "@const";
import {adapterData} from "../utils/utils";

export const getOffersFromServer = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const formattedData = data.map((offer) => adapterData(offer));
      dispatch(loadOffers(formattedData));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
