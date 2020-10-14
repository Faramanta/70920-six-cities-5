import ReviewItem from "../review-item/review-item";
import {OffersPropTypes, ReviewsPropTypes} from "../../utils/prop-types";

export default class ReviewList extends React.PureComponent {
  render() {
    const {reviews, offer} = this.props;
    const filteredReviews = reviews.filter((review) => review.offerId === offer.id);
    const reviewsCount = filteredReviews.length;

    return (
      <>
        {reviewsCount > 0 &&
          <>
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
            <ul className="reviews__list">
              {filteredReviews.map((filteredReview) => (
                <ReviewItem
                  key={filteredReview.id}
                  review={filteredReview}
                />
              ))}
            </ul>
          </>
        }
      </>
    );
  }
}

ReviewList.propTypes = {
  offer: OffersPropTypes,
  reviews: PropTypes.arrayOf(ReviewsPropTypes).isRequired
};
