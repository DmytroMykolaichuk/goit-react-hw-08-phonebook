import { ContactForm } from 'components/ContactForm/ContactForm';
import { TitleContactList } from 'components/App.styled';
export const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <TitleContactList>Contacts</TitleContactList>
    </>
    //   {isLoading && <div>Loading...</div>}
    //   {contacts.length === 0 && !isLoading && !error && (
    //     <Notification>Your phonebook is empty</Notification>
    //   )}

    //   {contacts.length !== 0 && (
    //     <div>
    //       <Filter />
    //       {getFilteredContacts.length === 0 && !isLoading && (
    //         <Notification>You have no contact with this name</Notification>
    //       )}
    //       <ContactList />
    //     </div>
    //   )}

    //   {error && <TextErrorPage>Oops...try again</TextErrorPage>}
  );
};
