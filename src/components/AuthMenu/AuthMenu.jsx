import { AuthNavLink, AuthMenuContainer } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <AuthMenuContainer>
      <AuthNavLink to="/">Home</AuthNavLink>
      <AuthNavLink to="/login">Login</AuthNavLink>
      <AuthNavLink to="/register">Registration</AuthNavLink>
    </AuthMenuContainer>
  );
};
