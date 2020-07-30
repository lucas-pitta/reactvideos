import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';

export const GoogleLoginBtn = styled(GoogleLogin)`
  @media (max-width: 800px) {
    position: fixed;
    top: 1%;
    right: 1%;
  }
`;