import React from 'react';
import propTypes from 'prop-types';

const InputField = props => {
  const { types, value } = props;
  return <input type={types} value={value} />;
};

InputField.defaultProps = {
  types: 'text',
  value: ''
};
InputField.propTypes = {
  /** Set what type of input that should be used. */
  types: propTypes.string,

  /** What value the fields has.  */
  value: propTypes.object
};

export default InputField;
