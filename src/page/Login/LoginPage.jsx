import {
  InputAuth,
  LabelAuth,
  FormAuth,
  ContainerFormAuth,
  ButtonAuth,
} from './Login.styled';

export const LoginPage = () => {
  return (
    <ContainerFormAuth>
      <FormAuth>
        <LabelAuth>
          Name
          <InputAuth type="text" />
        </LabelAuth>
        <LabelAuth>
          Password
          <InputAuth type="text" />
        </LabelAuth>
        <ButtonAuth type="submit">Login</ButtonAuth>
      </FormAuth>
    </ContainerFormAuth>
  );
};
