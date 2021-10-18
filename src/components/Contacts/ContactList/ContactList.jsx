import { useEffect } from "react";
import ContactListItem from "components/Contacts/ContactListItem/";
import { List } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { phonebookOperations, phonebookSelectors } from "redux/phonebook";

export default function ContactList() {
  const items = useSelector(phonebookSelectors.getFilteredItems);
  const dispatch = useDispatch();

  useEffect(() => dispatch(phonebookOperations.fetchContacts()), [dispatch]);

  return (
    <List>
      {items.map((item, index) => {
        return <ContactListItem key={item.id} item={item} index={index} />;
      })}
    </List>
  );
}
