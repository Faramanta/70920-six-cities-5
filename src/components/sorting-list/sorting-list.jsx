import {connect} from "react-redux";
import {ActionCreator} from "@store/action";
import {SortingType} from "@const";
import SortingItem from "@components/sorting-item/sorting-item";
import {withOpenSortingList} from "../../hocs/with-sorting-list";

const SortingList = (props) => {
  const {isOpen, onOpenList, changeSortingType, changeFilter} = props;

  const openListTypeClickClass = isOpen ? `places__options--opened` : ``;
  const sortNames = Object.values(SortingType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={onOpenList}
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
            isActive={sortName === props.sortingType}
            onSortItemClick={() => {
              onOpenList();
              changeSortingType(sortName);
              changeFilter();
            }}
          />
        ))}
      </ul>
    </form>
  );
};

SortingList.propTypes = {
  isOpen: PropTypes.bool,
  sortingType: PropTypes.string.isRequired,
  onOpenList: PropTypes.func.isRequired,
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

export const SortingForTest = withOpenSortingList(SortingList);
export default connect(mapStateToProps, mapDispatchToProps)(withOpenSortingList(SortingList));
