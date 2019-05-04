import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({type, ...props}) => (
  <Default type={type} {...props} />
);

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'contained',
};

const Default = styled.button`
  width: 80px;
  height: 32px;
`;

export default Button;
