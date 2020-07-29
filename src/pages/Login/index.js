import React from 'react'
import PageRoot from '../../components/PageRoot';
import GoogleBtn from '../../components/GoogleBtn';
import { ContentAreaContainer } from './styles';

function Login() {
  return (
    <PageRoot>
      <ContentAreaContainer>
        <h1>Para ter acesso personalizado ao seu conteúdo do youtube, faça login com o google!</h1>
        <br />
        <GoogleBtn />
      </ContentAreaContainer>
    </PageRoot>
  );
}

export default Login;