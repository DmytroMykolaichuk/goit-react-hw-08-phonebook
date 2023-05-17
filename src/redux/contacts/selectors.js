export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilter = state => state.filter;

export const visibleContact = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(contact => contact.name.toLowerCase().includes(filter));
};
