import ReviewItem from "../components/review-item/review-item";
import {ReviewsPropTypes} from "@props";

const ReviewList = ({currentOfferComments}) => {

  return (
    <ul className="reviews__list">
      {currentOfferComments.map((comment) => (
        <ReviewItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  currentOfferComments: PropTypes.arrayOf(ReviewsPropTypes),
};

export default ReviewList;
