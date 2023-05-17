import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  getContacts,
  visibleContact,
  getIsLoading,
  getError,
} from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import {
  TitleContactList,
  Notification,
  TextErrorPage,
} from 'components/App.styled';

export function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const getFilteredContacts = useSelector(visibleContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <TitleContactList>Contacts</TitleContactList>
      <ContactForm />

      {isLoading && <div>Loading...</div>}
      {contacts.length === 0 && !isLoading && !error && (
        <Notification>Your phonebook is empty</Notification>
      )}

      {contacts.length !== 0 && (
        <div>
          <Filter />
          {getFilteredContacts.length === 0 && !isLoading && (
            <Notification>You have no contact with this name</Notification>
          )}
          <ContactList />
        </div>
      )}

      {error && <TextErrorPage>Oops...try again</TextErrorPage>}
    </>
  );
}
