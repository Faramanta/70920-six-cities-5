import {connect} from "react-redux";
import {changeHoverOfferCardId} from "@store/action";
import OfferCard from "@components/offer/components/offer-card/offer-card";
import {OffersPropTypes} from "@props";

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferCardOver = this._handleOfferCardOver.bind(this);
    this._handleOfferCardOut = this._handleOfferCardOut.bind(this);
  }

  _handleOfferCardOver(id) {
    const {changeHoverOfferCardIdAction} = this.props;
    changeHoverOfferCardIdAction(id);
  }

  _handleOfferCardOut() {
    const {changeHoverOfferCardIdAction} = this.props;
    changeHoverOfferCardIdAction(0);
  }

  render() {
    const {offers, className, onFavoriteButtonClick} = this.props;

    return (
      <div className={`places__list ${className}`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferCardOver={() => this._handleOfferCardOver(offer.id)}
            onOfferCardOut={this._handleOfferCardOut}
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
