import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  font-size: 10px;
`;

const InputField = props => {
  const { types, value } = props;
  return <StyledInput type={types} value={value} />;
};

InputField.defaultProps = {
  types: 'text',
  value: ''
};
InputField.propTypes = {
  /** Set what type of input that should be used. */
  types: propTypes.string,

  /** What value the fields has.  */
  value: propTypes.string
};

export default InputField;
