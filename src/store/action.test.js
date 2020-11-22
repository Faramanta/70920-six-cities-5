import {
  ActionType,
  changeCity,
  changeSortingType,
  loadOffers,
  loadOffersNearby,
  loadFavorites,
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
