import React from 'react';
import { TextField, PasswordField } from '../ui/inputs';

const LoginForm = () => {
  const handleOnSubmit = event => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <TextField />
      <PasswordField />
      <button type="submit" label="click me" />
    </form>
  );
};

export default LoginForm;
