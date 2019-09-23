import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  display: inline-block;

  line-height: 1.1;
  height: 15px;
  background-color: #fff;
  border: 1px solid #cdcdcd;
  margin: 10px 0;
  width: 100%;
  padding: 17px 10px 13px 10px;
  font-family: 'avenir-roman', 'Avenir 55 Roman', sans-serif;
  color: #737373;
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  :focus {
    outline: 1px solid #cba462;
  }
`;

const PasswordField = props => {
  const { previousValue } = props;
  const [changedValue, setValue] = useState(previousValue);
  const handleOnChange = e => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <StyledInput
      type="password"
      value={changedValue}
      onChange={handleOnChange}
    />
  );
};

PasswordField.defaultProps = {
  previousValue: ''
};
PasswordField.propTypes = {
  /** What value the fields has.  */
  previousValue: propTypes.string
};

export default PasswordField;
