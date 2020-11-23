import SortingList from "./sorting-list";
import {connect} from "react-redux";
import {changeSortingType} from "@store/action";

const mapStateToProps = ({PROCESS}) => ({
  sortingType: PROCESS.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortingTypeAction(sortName) {
    dispatch(changeSortingType(sortName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
