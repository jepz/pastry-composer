import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  display: inline-block;
  width: 200px;
  margin: 10px;
  font-family: 'avenir-heavy', 'Avenir 85 Heavy', sans-serif;
  background-color: #cba463;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  padding: 14px 25px;
  border: none;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  padding: 14px 25px;
  text-transform: uppercase;
  margin-bottom: 5px;
  outline: none;
  :hover,
  :focus {
    background-color: #9f7147;
  }
`;

const SubmitBtn = props => {
  const { label } = props;

  return <Btn>{label}</Btn>;
};

export default SubmitBtn;

SubmitBtn.defaultProps = {
  label: 'Click me'
};

SubmitBtn.propTypes = {
  label: PropTypes.string
};
