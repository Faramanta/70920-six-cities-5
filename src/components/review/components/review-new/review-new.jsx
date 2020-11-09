import {Fragment} from 'react';
import {connect} from "react-redux";
import {withReviewNew} from "@hocs/with-review-new";
import {sendNewComment} from "@store/api-actions";
import {ratingInfo, FormStatus, ReviewLimits, ERROR_MESSAGE} from "@const";

class ReviewNew extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handleFormSubmit = this._handleFormSubmit.bind(this);

    this.errorRef = React.createRef();
  }

  _handleFormSubmit(evt) {
    const {onSubmitAction, review, rating, idCurrentOffer, changeDisabledFormStatus, resetForm} = this.props;
    evt.preventDefault();
    changeDisabledFormStatus(FormStatus.DISABLED);
    onSubmitAction(idCurrentOffer, {review, rating})
      .then(() => {
        resetForm();
        changeDisabledFormStatus(FormStatus.ENABLED);
      })
      .catch(() => {
        changeDisabledFormStatus(FormStatus.ENABLED);
        this.errorRef.current.textContent = ERROR_MESSAGE;
      });
  }

  render() {
    const {rating, review, onChange, isDisabled} = this.props;
    const formRef = React.createRef();

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleFormSubmit}
        ref={formRef}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>

        <div className="reviews__rating-form form__rating">
          {ratingInfo.map((ratingItem) => {
            return (
              <Fragment key={`${ratingItem.value}`} >
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={ratingItem.value}
                  id={`${ratingItem.value}-stars`}
                  type="radio"
                  onChange={onChange}
                  checked={rating === ratingItem.value}
                  disabled={isDisabled}
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
          onChange={onChange}
          value={review}
          disabled={isDisabled}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button" type="submit"
            disabled={
              review.length < ReviewLimits.MIN_COUNT_SIMBOLS ||
              review.length > ReviewLimits.MAX_COUNT_SIMBOLS ||
              rating.length === ReviewLimits.EMPTY_COUNT_SIMBOLS
            }>Submit</button>
        </div>
        <p
          ref={this.errorRef}
          style={{color: `red`, fontSize: `16`}}
        />
      </form>
    );
  }
}

ReviewNew.propTypes = {
  idCurrentOffer: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  onSubmitAction: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  changeDisabledFormStatus: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(offerId, commentData) {
    return dispatch(sendNewComment(offerId, commentData));
  },
});

export {ReviewNew};
export default connect(null, mapDispatchToProps)(withReviewNew(ReviewNew));
