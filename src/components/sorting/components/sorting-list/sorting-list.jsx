import {connect} from "react-redux";
import {changeSortingType} from "@store/action";
import {SortingType} from "@const";
import SortingItem from "../sorting-item/sorting-item";
import {withOpenSortingList} from "@hocs/with-sorting-list";

const SortingList = (props) => {
  const {isOpen, onOpenList, changeSortingTypeAction, sortingType} = props;

  const openListTypeClickClass = isOpen ? `places__options--opened` : ``;
  const sortNames = Object.values(SortingType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={onOpenList}
      >
        {sortingType}
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
              changeSortingTypeAction(sortName);
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
  changeSortingTypeAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  sortingType: PROCESS.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingTypeAction(sortName) {
    dispatch(changeSortingType(sortName));
  },
});

export const SortingForTest = withOpenSortingList(SortingList);
export default connect(mapStateToProps, mapDispatchToProps)(withOpenSortingList(SortingList));
