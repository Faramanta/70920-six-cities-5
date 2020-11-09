import ReviewItem from "../components/review-item/review-item";
import {ReviewsPropTypes} from "@props";

const ReviewList = ({currentOfferComments}) => {
  const reviewsCount = currentOfferComments.length;

  return (
    <>
    {reviewsCount > 0 &&
    <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
    <ul className="reviews__list">
      {currentOfferComments.map((comment) => (
        <ReviewItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
    </>
    }
    </>
  );
};

ReviewList.propTypes = {
  currentOfferComments: PropTypes.arrayOf(ReviewsPropTypes),
};

export default ReviewList;
