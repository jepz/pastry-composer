import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/login-form';

const StyedScreen = styled.div`
  height: 100vh;
  width: 100vw;

  form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
const CenterDiv = styled.div`
  text-align: center;
`;

const LoginScreen = () => (
  <StyedScreen>
    <CenterDiv>
      <LoginForm />
    </CenterDiv>
  </StyedScreen>
);

export default LoginScreen;
