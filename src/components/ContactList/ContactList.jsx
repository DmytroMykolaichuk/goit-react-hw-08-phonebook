import { useDispatch, useSelector } from 'react-redux';
import {
  ListContacts,
  ItemsContact,
  Contact,
  DeleteBtn,
} from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { visibleContact, getIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const getFilteredContacts = useSelector(visibleContact);

  return (
    <ListContacts>
      {getFilteredContacts.map(contact => (
        <ItemsContact key={contact.id}>
          <Contact>
            {contact.name}: {contact.phone}
          </Contact>
          <DeleteBtn
            disabled={isLoading}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </ItemsContact>
      ))}
    </ListContacts>
  );
};
