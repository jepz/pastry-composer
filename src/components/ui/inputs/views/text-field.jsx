import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  font-size: 10px;
`;

const TextField = props => {
  const { name, previousValue } = props;
  const [changedValue, setValue] = useState(previousValue);
  const handleOnChange = e => {
    const { value } = e.target;
    console.log(value);
    setValue(value);
  };
  return (
    <StyledInput
      type="text"
      value={changedValue}
      name={name}
      onChange={handleOnChange}
    />
  );
};

TextField.defaultProps = {
  types: 'text',
  previousValue: '',
  name: 'StateProp'
};
TextField.propTypes = {
  /** Set what type of input that should be used. */
  types: propTypes.string,

  /** Name of the prop in state */
  name: propTypes.string,
  /** What value the fields has.  */
  previousValue: propTypes.string
};

export default TextField;
