import { LayoutStyled, PhonebookApp } from './Layout.styled';
import { GlobalStyle } from 'components/GlobalStyle.styled';
import { TitleApp } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      <PhonebookApp>
        <header>
          <AppBar />
        </header>

        <main>
          <TitleApp>Phonebook</TitleApp>
          <Outlet />
        </main>
      </PhonebookApp>
    </LayoutStyled>
  );
};
