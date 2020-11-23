import {ActionType} from "@store/action";
import {loadData} from "./load-data";
import {offers, offer, comments} from "../../../mocks/mocks";

describe(`loadData reduser test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(loadData(void 0, {})).toEqual({
      allOffers: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      currentOfferComments: []
    });
  });

  it(`Reducer load offers`, () => {
    expect(loadData({
      allOffers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    })).toEqual({
      allOffers: offers
    });
  });

  it(`Reducer load offers nearby`, () => {
    expect(loadData({
      offersNearby: [],
    }, {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    })).toEqual({
      offersNearby: offers
    });
  });

  it(`Reducer load favorites`, () => {
    expect(loadData({
      favoriteOffers: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    })).toEqual({
      favoriteOffers: offers
    });
  });

  it(`Reducer load current offer`, () => {
    expect(loadData({
      currentOffer: null,
    }, {
      type: ActionType.LOAD_CURRENT_OFFER,
      payload: offer,
    })).toEqual({
      currentOffer: offer
    });
  });

  it(`Reducer load current offer comments`, () => {
    expect(loadData({
      currentOfferComments: [],
    }, {
      type: ActionType.LOAD_CURRENT_OFFER_COMMENTS,
      payload: comments,
    })).toEqual({
      currentOfferComments: comments
    });
  });

  it(`Reducer load current update favorite status`, () => {
    expect(loadData({
      allOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
      currentOffer: {id: 1, isFavorite: false},
      offersNearby: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
      favoriteOffers: [{id: 1, isFavorite: true}],
    }, {
      type: ActionType.UPDATE_FAVORITE_STATUS,
      payload: {id: 1, isFavorite: true},
    })).toEqual({
      allOffers: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
      currentOffer: {id: 1, isFavorite: true},
      offersNearby: [{id: 1, isFavorite: true}, {id: 2, isFavorite: false}, {id: 3, isFavorite: false}],
      favoriteOffers: [],
    });
  });
});
