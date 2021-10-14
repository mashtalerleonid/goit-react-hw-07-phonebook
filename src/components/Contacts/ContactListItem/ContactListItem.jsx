import { Item } from "./ContactListItem.styled";

import { useDispatch } from "react-redux";
import * as actions from "../../../redux/phonebook/phonebook-actions";

function ContactListItem({ item, index }) {
  const { id, name, number } = item;
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <Item index={index}>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
}

export default ContactListItem;
