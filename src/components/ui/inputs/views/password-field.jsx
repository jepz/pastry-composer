import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  font-size: 10px;
`;

const PasswordField = props => {
  const {} = props;
  const [value, setValue] = useState('');

  return <StyledInput type="password" value={value} onChange={setValue} />;
};

PasswordField.defaultProps = {
  value: ''
};
PasswordField.propTypes = {
  /** What value the fields has.  */
  value: propTypes.string
};

export default PasswordField;
