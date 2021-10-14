import ContactListItem from "components/Contacts/ContactListItem/";
import { List } from "./ContactList.styled";

import { useSelector } from "react-redux";
import { getFilteredItems } from "../../../redux/phonebook/phonebook-selectors";

export default function ContactList() {
  const items = useSelector(getFilteredItems);

  return (
    <List>
      {items.map((item, index) => {
        return <ContactListItem key={item.id} item={item} index={index} />;
      })}
    </List>
  );
}

// const mapStateToProps = ({ contacts: { items, filter } }) => {
//   return {
//     items: getFilteredItems(items, filter),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// export default ContactList;
