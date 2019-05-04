import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {darken} from 'polished';

const Button = ({
  color,
  size,
  type,
  ...props
}) => (
  <Default color={color} size={size} type={type} {...props}>
    {props.children}
  </Default>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['container', 'outlined']),
};

Button.defaultProps = {
  children: null,
  color: 'primary',
  size: 'small',
  type: 'contained',
};

const getColor = (colors) => ({
  primary: colors.grey,
  secondary: colors.deepGreen,
});

const width = {
  small: '80px',
  medium: '96px',
  large: '114px',
};

const height = {
  small: '32px',
  medium: '38.4px',
  large: '44.8px',
};

const fontSize = {
  small: '16px',
  medium: '17px',
  large: '18px',
};

const Default = styled.button`
  ${(props) => (props.type === 'outlined' ? getOutlinedStyles(props) : getContainedStyles(props))};

  width: ${({size}) => width[size]};
  height: ${({size}) => height[size]};

  font-family: ${({theme}) => theme.font.family};
  font-size: ${({size}) => fontSize[size]};
  font-weight: 500;

  line-height: ${({size}) => fontSize[size]} !important;

  border: 2px solid;
  border-radius: 8px;

  text-transform: uppercase;

  transition: .2s ease;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

const getContainedStyles = ({color, theme}) => css`
  color: white;
  border-color: white;
  background-color: ${getColor(theme.colors)[color]};

  &:hover {
    background-color: ${darken(0.05, getColor(theme.colors)[color])};
  }
`;

const getOutlinedStyles = ({color, theme}) => css`
  border-color: ${getColor(theme.colors)[color]};
  background-color: white;

  &:hover {
    color: white;
    border-color: ${getColor(theme.colors)[color]};
    background-color: ${getColor(theme.colors)[color]};
  }
`;

export default Button;
