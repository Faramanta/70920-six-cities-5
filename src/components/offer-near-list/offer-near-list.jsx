import {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card";

class OfferNearList extends PureComponent {
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
    const {offers} = this.props;

    return (
      <div className="near-places__list places__list">
        {offers.slice(0, 3).map((offer) => (
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

OfferNearList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferNearList;
