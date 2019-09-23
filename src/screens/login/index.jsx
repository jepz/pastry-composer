import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/login-form';
import logo from '../../assets/img/logo@1x.png';

const StyedScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;

const CenterDiv = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

const Logotype = styled.img`
  width: 136px;
  height: 98px;
`;

const LoginScreen = () => (
  <StyedScreen>
    <CenterDiv>
      <Logotype src={logo} alt="Pågen logotyp" />
      <LoginForm />
    </CenterDiv>
  </StyedScreen>
);

export default LoginScreen;
