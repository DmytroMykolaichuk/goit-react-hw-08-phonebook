import { useDispatch, useSelector } from 'react-redux';
import {
  ListContacts,
  ItemsContact,
  Contact,
  Button,
  ButtonContainer,
} from './ContactList.styled';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { visibleContact, getIsLoading } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const getFilteredContacts = useSelector(visibleContact);

  function handlerEditContact() {
    console.log(5);
  }

  return (
    <ListContacts>
      {getFilteredContacts.map(contact => (
        <ItemsContact key={contact.id}>
          <Contact>
            {contact.name}: {contact.number}
          </Contact>
          <ButtonContainer>
            <Button
              disabled={isLoading}
              type="button"
              onClick={handlerEditContact}
            >
              Edit
            </Button>
            <Button
              disabled={isLoading}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </ButtonContainer>
        </ItemsContact>
      ))}
    </ListContacts>
  );
};
