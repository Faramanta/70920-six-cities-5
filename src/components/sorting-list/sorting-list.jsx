import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {SortingType} from "../../const";
import SortingItem from "../sorting-item/sorting-item";

class SortingList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this._onOpenListTypeClick = this._onOpenListTypeClick.bind(this);
    this._onSortItemClick = this._onSortItemClick.bind(this);
  }

  // Открыть сортировку
  _onOpenListTypeClick() {
    this.setState({
      isOpen: true
    });
  }

  // Обработка клика по пункту сортировки
  _onSortItemClick(sortName) {
    const {changeSortingType, sortPopular, sortLowToHigh, sortHighToLow, sortTopRatedFirst} = this.props;

    this.setState({
      isOpen: false
    });

    changeSortingType(sortName);

    switch (sortName) {
      case SortingType.POPULAR:
        sortPopular();
        break;
      case SortingType.LOW_TO_HIGH:
        sortLowToHigh();
        break;
      case SortingType.HIGH_TO_LOW:
        sortHighToLow();
        break;
      case SortingType.TOP_RATED_FRIST:
        sortTopRatedFirst();
        break;
    }
  }

  render() {
    const {sortingType} = this.props;
    const openListTypeClickClass = this.state.isOpen ? `places__options--opened` : ``;

    const sortNames = Object.values(SortingType);

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={this._onOpenListTypeClick}
        >
        Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${openListTypeClickClass}`}>
          {sortNames.map((sortName, index) => (
            <SortingItem
              key={index}
              sortName={sortName}
              isActive={sortName === sortingType}
              onSortItemClick={() => this._onSortItemClick(sortName)}
            />
          ))}
        </ul>
      </form>
    );
  }
}

SortingList.propTypes = {
  changeSortingType: PropTypes.func.isRequired,
  sortPopular: PropTypes.func.isRequired,
  sortLowToHigh: PropTypes.func.isRequired,
  sortHighToLow: PropTypes.func.isRequired,
  sortTopRatedFirst: PropTypes.func.isRequired,
  sortingType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingType(sortName) {
    dispatch(ActionCreator.changeSortingType(sortName));
  },
  sortPopular() {
    dispatch(ActionCreator.sortPopular());
  },
  sortLowToHigh() {
    dispatch(ActionCreator.sortLowToHigh());
  },
  sortHighToLow() {
    dispatch(ActionCreator.sortHighToLow());
  },
  sortTopRatedFirst() {
    dispatch(ActionCreator.sortTopRatedFirst());
  }
});

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
