import {
  ActionType,
  changeCity,
  changeSortingType,
  changeHoverOfferCardId,
  loadOffers,
  loadOffersNearby,
  loadFavorites,
  updateMainOfferFavoriteStatus,
  updateCurrentOfferFavoriteStatus,
  updateNearbyOfferFavoriteStatus,
  removeFavoriteStatus,
  loadCurrentOffer,
  loadCurrentOfferComments,
  requireAuthorization,
  updateUser,
} from "./action";
import {offers, offer, comments, userData} from "../mocks/mocks";

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for sorting type`, () => {
    expect(changeSortingType(`Popular`)).toEqual({
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: `Popular`,
    });
  });

  it(`Action creator for change hover offer card`, () => {
    expect(changeHoverOfferCardId(1)).toEqual({
      type: ActionType.CHANGE_HOVER_OFFER_CARD_ID,
      payload: 1,
    });
  });

  it(`Action creator for load offers`, () => {
    expect(loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for load offers nearby`, () => {
    expect(loadOffersNearby(offers)).toEqual({
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    });
  });

  it(`Action creator for load favorites`, () => {
    expect(loadFavorites(offers)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    });
  });

  it(`Action creator for update main favorite status`, () => {
    expect(updateMainOfferFavoriteStatus({
      id: 1,
      isFavorite: true
    })).toEqual({
      type: ActionType.UPDATE_MAIN_OFFER_FAVORITE_STATUS,
      payload: {id: 1, isFavorite: true},
    });
  });

  it(`Action creator for current offer favorite status`, () => {
    expect(updateCurrentOfferFavoriteStatus({
      id: 1,
      isFavorite: true
    })).toEqual({
      type: ActionType.UPDATE_CURRENT_OFFER_FAVORITE_STATUS,
      payload: {id: 1, isFavorite: true},
    });
  });

  it(`Action creator for current nearby offer favorite status`, () => {
    expect(updateNearbyOfferFavoriteStatus({
      id: 1,
      isFavorite: true
    })).toEqual({
      type: ActionType.UPDATE_NEARBY_OFFER_FAVORITE_STATUS,
      payload: {id: 1, isFavorite: true},
    });
  });

  it(`Action creator for remove favorite status`, () => {
    expect(removeFavoriteStatus(offer)).toEqual({
      type: ActionType.REMOVE_FAVORITE_STATUS,
      payload: offer,
    });
  });

  it(`Action creator for load current offer`, () => {
    expect(loadCurrentOffer(offer)).toEqual({
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: offer,
    });
  });

  it(`Action creator for load current offer comments`, () => {
    expect(loadCurrentOfferComments(comments)).toEqual({
      type: ActionType.LOAD_CURRENT_OFFER_COMMENTS,
      payload: comments,
    });
  });

  it(`Action creator for load require authorization status`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for load user data`, () => {
    expect(updateUser(userData)).toEqual({
      type: ActionType.UPDATE_USER,
      payload: userData,
    });
  });
});
