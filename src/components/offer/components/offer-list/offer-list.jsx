import {connect} from "react-redux";
import {changeHoverOfferCardId} from "@store/action";
import OfferCard from "@components/offer/components/offer-card/offer-card";
import {OffersPropTypes} from "@props";

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);
  }

  _handleOfferCardHover(id) {
    const {changeHoverOfferCardIdAction} = this.props;
    changeHoverOfferCardIdAction(id);
  }

  render() {
    const {offers, className, onFavoriteButtonClick} = this.props;

    return (
      <div className={`places__list ${className}`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferCardHover={() => this._handleOfferCardHover(offer.id)}
            offerPathname={offer.id}
            onFavoriteButtonClick={onFavoriteButtonClick}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  changeHoverOfferCardIdAction: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func,
  className: PropTypes.string,
};

const mapStateToProps = ({DATA}) => ({
  hoverOfferCardId: DATA.hoverOfferCardId
});

const mapDispatchToProps = (dispatch) => ({
  changeHoverOfferCardIdAction(id) {
    dispatch(changeHoverOfferCardId(id));
  }
});

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
