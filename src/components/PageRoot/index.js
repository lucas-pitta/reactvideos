import React from 'react';
import Menu from '../Menu';
import { Main } from './styles';

function PageRoot({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
    </>
  );
}

export default PageRoot;