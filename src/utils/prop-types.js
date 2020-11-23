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
  images: PropTypes.array.isRequired,
  facilities: PropTypes.array.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string.isRequired,
  isSuper: PropTypes.bool.isRequired,
  coordinates: PropTypes.array.isRequired
});

export const ReviewsPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
}).isRequired;
