import {ActionType} from "@store/action";
import {appProcess} from "./app-process";


describe(`appProcess reduser test`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appProcess(void 0, {})).toEqual({
      city: `Paris`,
      sortingType: `Popular`,
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
    });
  });

  it(`Reducer update city`, () => {
    expect(appProcess({
      city: `Paris`,
      sortingType: `Popular`,
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
    }, {
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    })).toEqual({
      city: `Amsterdam`,
      sortingType: `Popular`,
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
    });
  });

  it(`Reducer update sorting type`, () => {
    expect(appProcess({
      city: `Paris`,
      sortingType: `Popular`,
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
    }, {
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: `Price: high to low`,
    })).toEqual({
      city: `Paris`,
      sortingType: `Price: high to low`,
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
    });
  });
});
