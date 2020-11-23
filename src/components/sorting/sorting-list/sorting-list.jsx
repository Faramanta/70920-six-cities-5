import {SortingType} from "@const";
import SortingItem from "@components/sorting/sorting-item/sorting-item";

const SortingList = (props) => {
  const {changeSortingTypeAction, sortingType} = props;

  const [isSortOpen, setSortOpen] = React.useState(false);

  const handleOpenList = () => {
    setSortOpen(!isSortOpen);
  };

  const openListTypeClickClass = isSortOpen ? `places__options--opened` : ``;
  const sortNames = Object.values(SortingType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={handleOpenList}
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
              handleOpenList();
              changeSortingTypeAction(sortName);
            }}
          />
        ))}
      </ul>
    </form>
  );
};

SortingList.propTypes = {
  isSortOpen: PropTypes.bool,
  sortingType: PropTypes.string.isRequired,
  changeSortingTypeAction: PropTypes.func.isRequired,
};

export default SortingList;
