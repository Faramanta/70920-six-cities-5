import {Fragment} from 'react';
import {ratingInfo, ReviewLimits} from "@const";
import {extend} from "@utils/utils";

const ReviewNew = (props) => {
  const {onSubmitAction, idCurrentOffer} = props;

  const [isFormStatus, setFormStatus] = React.useState(false);
  const [isError, setError] = React.useState(false);

  const [comment, setComment] = React.useState({
    rating: ``,
    review: ``,
  });
  const {rating, review} = comment;

  React.useEffect(() => {
    setError(false);
  }, [comment]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (rating && review) {
      setFormStatus(true);
      onSubmitAction(idCurrentOffer, {rating, review})
        .then(() => {
          setComment({
            rating: ``,
            review: ``,
          });
          setFormStatus(false);
        })
        .catch(() => {
          setError(true);
          setFormStatus(false);
        });
    }
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setComment((prevComment) => extend(prevComment, {[name]: value}));
  };

  const isButtonDisabled = () => {
    return !rating || review.length < ReviewLimits.MIN_COUNT_SIMBOLS || review.length > ReviewLimits.MAX_COUNT_SIMBOLS;
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating" >
        {ratingInfo.map((ratingItem) => {
          return (
            <Fragment key={`${ratingItem.value}`} >
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingItem.value}
                id={`${ratingItem.value}-stars`}
                type="radio"
                onChange={(evt) => handleFieldChange(evt)}
                checked={rating === ratingItem.value}
                disabled={isFormStatus}
              />
              <label htmlFor={`${ratingItem.value}-stars`} className="reviews__rating-label form__rating-label" title={ratingItem.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => handleFieldChange(evt)}
        value={review}
        disabled={isFormStatus}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="submit"
          disabled={isButtonDisabled()} style={isError ? {background: `red`} : {background: ``}}>{isError ? `Sending error` : `Submit`}</button>
      </div>
    </form>
  );
};

ReviewNew.propTypes = {
  idCurrentOffer: PropTypes.number.isRequired,
  onSubmitAction: PropTypes.func,
};

export default ReviewNew;
