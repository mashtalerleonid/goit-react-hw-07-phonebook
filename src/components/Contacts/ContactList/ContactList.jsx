import ContactListItem from "components/Contacts/ContactListItem/";
import { List } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getFilter } from "redux/phonebook/phonebook-selectors";
import { useGetAllContactsQuery } from "service/phonebook-api";

export default function ContactList() {
  const filter = useSelector(getFilter);

  let filteredData = [];

  const { data, error, isError, isSuccess } = useGetAllContactsQuery();

  if (isSuccess) {
    filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <>
      {filteredData && (
        <List>
          {filteredData.map((item, index) => {
            return <ContactListItem key={item.id} item={item} index={index} />;
          })}
        </List>
      )}

      {/* {isFetching && <p>Loading...</p>} */}

      {isError && <p>{error.data}</p>}
    </>
  );
}

// const items = useSelector(phonebookSelectors.getFilteredItems);
// useEffect(() => dispatch(phonebookOperations.fetchContacts()), [dispatch]);
