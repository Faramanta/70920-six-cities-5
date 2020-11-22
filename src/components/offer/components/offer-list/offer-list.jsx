import OfferCard from "@components/offer/components/offer-card/offer-card";
import {OffersPropTypes} from "@props";

const OfferList = (props) => {

  const {offers, className, onFavoriteButtonClick, onOfferHover} = props;

  return (
    <div className={`places__list ${className}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onOfferHover={onOfferHover}
          offerPathname={offer.id}
          onFavoriteButtonClick={onFavoriteButtonClick}
        />
      ))}
    </div>
  );
};


OfferList.propTypes = {
  offers: PropTypes.arrayOf(OffersPropTypes).isRequired,
  onFavoriteButtonClick: PropTypes.func,
  onOfferHover: PropTypes.func,
  className: PropTypes.string,
};

export default OfferList;
