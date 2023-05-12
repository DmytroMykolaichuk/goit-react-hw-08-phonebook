import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {
  TitleApp,
  TitleContactList,
  Notification,
  TextErrorPage,
} from './App.styled';
import { GlobalStyle } from './GlobalStyle.styled';
import { Layout } from './Layout.styled';
import { useSelector } from 'react-redux';
import {
  getContacts,
  visibleContact,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const getFilteredContacts = useSelector(visibleContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContactList>Contacts</TitleContactList>
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
    </Layout>
  );
}
