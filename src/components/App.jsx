import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'page/Login/LoginPage';
import { RegisterPage } from 'page/Register/RegisterPage';
import { ContactsPage } from 'page/ContactsPage/ContactsPage';
import { HomePage } from 'page/Home/HomePage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/user/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/user/operations';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
}
