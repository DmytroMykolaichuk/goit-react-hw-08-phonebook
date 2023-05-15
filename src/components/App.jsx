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
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'page/Login/LoginPage';
import { RegisterPage } from 'page/Register/RegisterPage';
import { ContactsPage } from 'page/Contacts/ContactsPage';

export function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  // const contacts = useSelector(getContacts);
  // const getFilteredContacts = useSelector(visibleContact);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //    <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/register" element={<RegisterPage />} />
  //       <Route path="/contacts" element={<ContactsPage />} />
  //     </Route>
  //   </Routes>
  //   // <Layout>
  //   //   <GlobalStyle />
  //   //   <TitleApp>Phonebook</TitleApp>
  //   //   <ContactForm />
  //   //   <TitleContactList>Contacts</TitleContactList>
  //   //   {isLoading && <div>Loading...</div>}
  //   //   {contacts.length === 0 && !isLoading && !error && (
  //   //     <Notification>Your phonebook is empty</Notification>
  //   //   )}

  //   //   {contacts.length !== 0 && (
  //   //     <div>
  //   //       <Filter />
  //   //       {getFilteredContacts.length === 0 && !isLoading && (
  //   //         <Notification>You have no contact with this name</Notification>
  //   //       )}
  //   //       <ContactList />
  //   //     </div>
  //   //   )}

  //   //   {error && <TextErrorPage>Oops...try again</TextErrorPage>}
  //   // </Layout>
  // );
  return <RegisterPage />;
}
