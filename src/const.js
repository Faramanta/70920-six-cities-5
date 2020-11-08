export const MapSettings = {
  ICON_URL: `img/pin.svg`,
  HOVER_ICON_URL: `img/pin-active.svg`,
  ICON_SIZE: [27, 39],
  MAP_CONTAINER_ID: `map`,
};

export const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const TypeRoom = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const SortingType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FRIST: `Top rated first`
};

export const ratingInfo = [
  {title: `perfect`, value: `5`},
  {title: `good`, value: `4`},
  {title: `not bad`, value: `3`},
  {title: `badly`, value: `2`},
  {title: `terribly`, value: `1`},
];

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const HttpCode = {
  UNAUTHORIZED: 401
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/`,
};
