import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  font-size: 10px;
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
