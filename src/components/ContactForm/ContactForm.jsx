import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Label,
  ButtonSubmit,
  Input,
  ErrorMessage,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required(),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, min 5 numbers'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, actions) => {
    const newContact = { name, phone: number };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name :
          <Input name="name" />
        </Label>
        <ErrorMessage name="name" component="p" />
        <Label>
          Number :
          <Input type="tel" name="number" />
        </Label>
        <ErrorMessage name="number" component="p" />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    </Formik>
  );
};
