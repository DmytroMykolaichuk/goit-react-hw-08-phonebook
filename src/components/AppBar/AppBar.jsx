import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';

export const AppBar = () => {
  const isLoggedInUser = useSelector(selectIsLoggedIn);

  return <>{isLoggedInUser ? <UserMenu /> : <AuthMenu />}</>;
};
