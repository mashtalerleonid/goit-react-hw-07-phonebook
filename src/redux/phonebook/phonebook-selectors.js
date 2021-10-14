export const getFilter = (state) => state.contacts.filter;

export const getItems = (state) => state.contacts.items;

export const getFilteredItems = (state) => {
  const items = getItems(state);
  const filter = getFilter(state);
  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
