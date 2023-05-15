import { AuthNavLink, AuthMenuContainer } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <AuthMenuContainer>
      <AuthNavLink to="/login">Login</AuthNavLink>
      <AuthNavLink to="/register">Registration</AuthNavLink>
      <AuthNavLink to="/contacts">Contacts</AuthNavLink>
    </AuthMenuContainer>
  );
};
