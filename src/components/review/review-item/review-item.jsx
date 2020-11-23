import {ReviewsPropTypes} from "@props";
import {getRating} from "@utils/utils";

const ReviewItem = (props) => {
  const {comment} = props;

  const publicationDate = comment.date.toLocaleString(`en-US`, {year: `numeric`, month: `long`});
  const dateTime = comment.date.toISOString().substring(0, 10);
  const hotelRating = getRating(comment.rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {comment.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${hotelRating}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{publicationDate}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  comment: ReviewsPropTypes
};

export default ReviewItem;
