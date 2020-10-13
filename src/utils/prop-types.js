export const OffersPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedroomCount: PropTypes.number.isRequired,
  guestCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pictures: PropTypes.array.isRequired,
  facilities: PropTypes.array.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string.isRequired,
  isSuper: PropTypes.bool.isRequired,
  coordinates: PropTypes.array.isRequired
}).isRequired;

export const ReviewsPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  offerId: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}).isRequired;
