import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews, offer} = this.props;
    const filteredReviews = reviews.filter((review) => review.offerId === offer.id);

    return (
      <ul className="reviews__list">
        {filteredReviews.map((filteredReview) => (
          <ReviewItem
            key={filteredReview.id}
            review={filteredReview}
          />
        ))}
      </ul>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pictures: PropTypes.array.isRequired,

  }).isRequired
};

export default ReviewList;
