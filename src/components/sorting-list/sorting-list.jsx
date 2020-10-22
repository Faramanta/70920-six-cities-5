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
    const {changeSortingType, changeFilter} = this.props;

    this.setState({
      isOpen: false
    });

    changeSortingType(sortName);
    changeFilter();
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
  sortingType: PropTypes.string.isRequired,
  changeSortingType: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingType(sortName) {
    dispatch(ActionCreator.changeSortingType(sortName));
  },
  changeFilter() {
    dispatch(ActionCreator.changeFilter());
  },
});

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
