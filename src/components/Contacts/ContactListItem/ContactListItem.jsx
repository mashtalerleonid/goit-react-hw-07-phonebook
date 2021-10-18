import { Item } from "./ContactListItem.styled";

import { useDispatch } from "react-redux";
import { phonebookOperations, phonebookActions } from "redux/phonebook";

function ContactListItem({ item, index }) {
  const { id, name, number } = item;
  const dispatch = useDispatch();
  const onDeleteContact = async (id) => {
    await dispatch(phonebookOperations.delContact(id));
    // dispatch(phonebookActions.deleteContact(id));
    await dispatch(phonebookOperations.fetchContacts());
  };

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
