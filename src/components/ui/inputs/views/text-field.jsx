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
  previousValue: '',
  name: 'StateProp'
};
TextField.propTypes = {
  /** Name of the prop in state */
  name: propTypes.string,
  /** What value the fields has.  */
  previousValue: propTypes.string
};

export default TextField;
