import OfferCard from "../offer-card/offer-card";
import {OffersPropTypes} from "Props";

export default class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offerActive: null,
    };
    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);
  }

  _handleOfferCardHover(offer) {
    this.setState({
      offerActive: offer
    });
  }

  render() {
    const {offers, className} = this.props;

    return (
      <div className={`places__list ${className}`}>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferCardHover={this._handleOfferCardHover}
            offerPathname={offer.id}
          />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  className: PropTypes.string
};
