import {Fragment} from 'react';
import {ratingInfo} from "../../const";

const Rating = (props) => {
  const {rating, onChange} = props;

  return (
    <div className="reviews__rating-form form__rating">
      {ratingInfo.map((title, value) => {
        const isChecked = rating === value ? `checked` : ``;
        return (
          <Fragment key={`${value}`} >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={onChange}
              checked={isChecked}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
