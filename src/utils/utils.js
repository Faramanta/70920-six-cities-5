export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getRating = (rating) => {
  const offerRating = Math.round(rating);
  return offerRating > 0 && offerRating <= 5 ? `${offerRating * 20}%` : false;
};

export const adapterData = (offer) => {
  return Object.assign({}, offer, {
    city: offer.city.name,
    cityLocation: offer.city.location,
    isPremium: offer.is_premium,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
    bedroomCount: offer.bedrooms,
    guestCount: offer.max_adults,
    price: offer.price,
    facilities: offer.goods,
    images: offer.images,
    previewImage: offer.preview_image,
    ownerName: offer.host.name,
    ownerAvatar: offer.host.avatar_url,
    isSuper: offer.host.is_pro,
    isFavorite: offer.is_favorite,
    coordinates: [offer.location.latitude, offer.location.longitude],
  });
};

export const adapterComment = (comment) => {
  return Object.assign({}, comment, {
    comment: comment.comment,
    date: new Date(comment.date),
    userId: comment.user.id,
    avatarUrl: comment.user.avatar_url,
    isPro: comment.user.is_pro,
    name: comment.user.name,
  });
};

export const adapterUser = (comment) => {
  return Object.assign({}, comment, {
    avatarUrl: comment.user.avatar_url,
    isPro: comment.user.is_pro,
  });
};

export const updateArray = (elem, array) => {
  const index = array.findIndex((item) => item.id === elem.id);
  return index !== -1
    ? [...array.slice(0, index), elem, ...array.slice(index + 1)]
    : [...array, elem];
};
