import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './styles';

function PageRoot({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageRoot;