import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
import {
  ContainerFormAuth,
  FormAuth,
  LabelAuth,
  InputAuth,
  ButtonAuth,
} from 'page/Login/Login.styled';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <ContainerFormAuth>
      <FormAuth onSubmit={handleSubmit}>
        <LabelAuth>
          Name
          <InputAuth type="text" name="name" />
        </LabelAuth>
        <LabelAuth>
          Email
          <InputAuth type="email" name="email" />
        </LabelAuth>
        <LabelAuth>
          Password
          <InputAuth type="password" name="password" />
        </LabelAuth>
        <ButtonAuth type="submit">Registration</ButtonAuth>
      </FormAuth>
    </ContainerFormAuth>
  );
};
