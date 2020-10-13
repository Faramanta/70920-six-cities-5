import ReviewItem from "../review-item/review-item";
import {OffersPropTypes, ReviewsPropTypes} from "../../utils/prop-types";

export default class ReviewList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews, offer} = this.props;
    const filteredReviews = reviews.filter((review) => review.offerId === offer.id);
    const reviewcCount = filteredReviews.length;

    return (
      <>
        {reviewcCount > 0 &&
          <>
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewcCount}</span></h2>
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
