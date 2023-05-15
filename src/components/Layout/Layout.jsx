import { LayoutStyled } from './Layout.styled';
import { GlobalStyle } from 'components/GlobalStyle.styled';
import { TitleApp } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

export const Layout = () => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      <header>
        <AuthMenu />
      </header>

      <main>
        <TitleApp>Phonebook</TitleApp>
        <Outlet />
      </main>
    </LayoutStyled>
  );
};
