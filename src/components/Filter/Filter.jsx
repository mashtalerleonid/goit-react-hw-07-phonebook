import { Label, Input } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "redux/phonebook/phonebook-actions";
import { getFilter } from "redux/phonebook/phonebook-selectors";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = (event) =>
    dispatch(actions.filterChange(event.target.value));

  return (
    <Label>
      Find contacts by name:
      <Input value={filter} onChange={onFilterChange} />
    </Label>
  );
}
