import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';
import {
  InputAuth,
  LabelAuth,
  FormAuth,
  ContainerFormAuth,
  ButtonAuth,
} from './Login.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
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
          Email
          <InputAuth type="email" name="email" />
        </LabelAuth>
        <LabelAuth>
          Password
          <InputAuth type="password" name="password" />
        </LabelAuth>
        <ButtonAuth type="submit">Login</ButtonAuth>
      </FormAuth>
    </ContainerFormAuth>
  );
};
