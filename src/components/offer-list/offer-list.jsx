import {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card";

class OfferList extends PureComponent {
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
      <div className="cities__places-list places__list tabs__content">
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
  offers: PropTypes.array.isRequired,
};

export default OfferList;
