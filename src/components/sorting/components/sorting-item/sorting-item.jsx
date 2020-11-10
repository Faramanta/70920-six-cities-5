const SortingItem = ({sortName, onSortItemClick, isActive}) => {
  const activeSortTypeClass = isActive ? `places__option--active` : ``;

  return (
    <li className={`places__option ${activeSortTypeClass}` }
      tabIndex="0"
      onClick={onSortItemClick}
    >{sortName}</li>
  );
};

SortingItem.propTypes = {
  onSortItemClick: PropTypes.func.isRequired,
  sortName: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
};

export default SortingItem;
