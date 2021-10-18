import { Item } from "./ContactListItem.styled";

import { useDeleteContactMutation } from "service/phonebook-api";

function ContactListItem({ item, index }) {
  const { id, name, number } = item;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item index={index}>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </Item>
  );
}

export default ContactListItem;

// const onDeleteContact = async (id) => {
//   dispatch(phonebookActions.deleteContact(id));
// };
