import {Fragment, PureComponent} from "react";
import ReviewItem from "../review-item/review-item";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews, offer} = this.props;
    const filteredReviews = reviews.filter((review) => review.offerId === offer.id);
    const reviewcCount = filteredReviews.length;

    return (
      <Fragment>
        {reviewcCount
          ?
          <Fragment>
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewcCount}</span></h2>
            <ul className="reviews__list">
              {filteredReviews.map((filteredReview) => (
                <ReviewItem
                  key={filteredReview.id}
                  review={filteredReview}
                />
              ))}
            </ul>
          </Fragment>
          : null
        }
      </Fragment>
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
