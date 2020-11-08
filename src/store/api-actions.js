import {loadOffers, loadOffersNearby, loadFavorites, loadCurrentOffer, loadCurrentOfferComments, requireAuthorization,
  updateFavoriteStatus, updateUser} from "./action";
import {AuthorizationStatus} from "@const";
import {adapterData, adapterComment} from "../utils/utils";

export const getOffersFromServer = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const formattedData = data.map((offer) => adapterData(offer));
      dispatch(loadOffers(formattedData));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(updateUser(response.data));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(updateUser(response.data));
    })
);

// Запрос текущего предложения
export const getCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(loadCurrentOffer(adapterData(data)));
    })
);

// Запрос списка предложений неподалеку
export const getOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      const formattedData = data.map((offer) => adapterData(offer));
      dispatch(loadOffersNearby(formattedData));
    })
);

// Запрос список комментариев для конкретного предложения по его id.
export const getCurrentOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      const formattedData = data.map((comment) => adapterComment(comment));
      dispatch(loadCurrentOfferComments(formattedData));
    })
);

// Получение списка избранных предложений.
export const getFavoriteOffer = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      const formattedData = data.map((offer) => adapterData(offer));
      dispatch(loadFavorites(formattedData));
    })
);

// Изменение статуса избранного у предложения.
export const changeFavoriteStatus = (id, favoriteStatus, action) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${favoriteStatus}`)
    .then(({data}) => {
      dispatch(action(adapterData(data)));
    })
);

