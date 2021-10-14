import { Label, Input } from "./Filter.styled";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = (event) =>
    dispatch(actions.filterChange(event.target.value));

  const onFilterBlur = () => dispatch(actions.filterBlur(""));

  return (
    <Label>
      Find contacts by name:
      <Input value={filter} onChange={onFilterChange} onBlur={onFilterBlur} />
    </Label>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     filter: state.contacts.filter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFilterChange: (event) =>
//       dispatch(actions.filterChange(event.target.value)),
//     onFilterBlur: () => dispatch(actions.filterBlur("")),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
