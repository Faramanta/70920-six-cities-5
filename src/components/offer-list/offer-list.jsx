import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferCard from "../offer-card/offer-card";
import {OffersPropTypes} from "Props";

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferCardOver = this._handleOfferCardOver.bind(this);
    this._handleOfferCardOut = this._handleOfferCardOut.bind(this);
  }

  _handleOfferCardOver(id) {
    const {changeHoverOfferCardId} = this.props;
    changeHoverOfferCardId(id);
  }

  _handleOfferCardOut() {
    const {changeHoverOfferCardId} = this.props;
    changeHoverOfferCardId(null);
  }

  render() {
    const {offers, className} = this.props;

    return (
      <div className={`places__list ${className}`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferCardOver={() => this._handleOfferCardOver(offer.id)}
            onOfferCardOut={this._handleOfferCardOut}
            offerPathname={offer.id}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  changeHoverOfferCardId: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  hoverOfferCardId: state.hoverOfferCardId
});

const mapDispatchToProps = (dispatch) => ({
  changeHoverOfferCardId(id) {
    dispatch(ActionCreator.changeHoverOfferCardId(id));
  },

});

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
