import React from 'react';
import styled from 'styled-components';
import { TextField, PasswordField } from '../ui/inputs';
import { SubmitButton } from '../ui/button';

const StyledForm = styled.form`
  background-color: #fefcec;
  display: inline-block;
  height: 200px;
  width: 200px;
`;

const LoginForm = () => {
  const handleOnSubmit = event => {
    event.preventDefault();
  };
  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <TextField />
      <PasswordField />
      <SubmitButton label='click me' />
    </StyledForm>
  );
};

export default LoginForm;
