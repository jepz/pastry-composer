import React from 'react';
import styled from 'styled-components';
import { TextField, PasswordField } from '../ui/inputs';

const StyledForm = styled.form`
  background-color: #fefcec;
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
      <button type="submit" label="click me" />
    </StyledForm>
  );
};

export default LoginForm;
