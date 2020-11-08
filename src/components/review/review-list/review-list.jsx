import {connect} from 'react-redux';
import ReviewItem from "../components/review-item/review-item";
import {ReviewsPropTypes} from "@props";
import {getCurrentOfferComments} from "@store/api-actions";

class ReviewList extends React.PureComponent {
  componentDidMount() {
    const {idCurrentOffer, loadCurrentOfferComments} = this.props;
    loadCurrentOfferComments(idCurrentOffer);
  }

  render() {
    const {currentOfferComments} = this.props;

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
  }
}

ReviewList.propTypes = {
  currentOfferComments: PropTypes.arrayOf(ReviewsPropTypes),
  idCurrentOffer: PropTypes.number,
  loadCurrentOfferComments: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  currentOfferComments: DATA.currentOfferComments,
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentOfferComments(id) {
    dispatch(getCurrentOfferComments(id));
  },
});

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
