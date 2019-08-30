import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

import theme from '../styles/theme';

const Button = ({
  color,
  disabled,
  onClick,
  size,
  type,
  ...props
}) => (
  <Default
    color={color}
    disabled={disabled}
    onClick={disabled ? () => {} : onClick}
    size={size}
    type={type}
    {...props}
  >
    {props.children}
  </Default>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['contained', 'outlined']),
};

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  onClick: () => {},
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
  ${(props) => (props.type === 'outlined' ? getOutlinedStyles(props) : getContainedStyles(props))}

  ${(props) => props.disabled && getDisabledStyles()}

  width: ${({size}) => width[size]};
  height: ${({size}) => height[size]};

  font-family: ${theme.font.family};
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
    cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  }
`;

const getDisabledStyles = () => css`
  color: ${lighten(0.3, theme.colors.lightGrey)};
  border-color: ${lighten(0.3, theme.colors.lightGrey)};
  background-color: ${lighten(0.5, theme.colors.lightGrey)};

  &:hover {
    background-color: ${lighten(0.5, theme.colors.lightGrey)};
  }
`;

const getContainedStyles = ({color}) => css`
  color: white;
  border-color: ${getColor(theme.colors)[color]} !important;
  background-color: ${getColor(theme.colors)[color]};

  &:hover {
    border-color: ${getColor(theme.colors)[color]};
    background-color: ${darken(0.05, getColor(theme.colors)[color])};
  }
`;

const getOutlinedStyles = ({color}) => css`
  border-color: ${getColor(theme.colors)[color]};
  background-color: white;

  &:hover {
    color: white;
    border-color: ${getColor(theme.colors)[color]};
    background-color: ${getColor(theme.colors)[color]};
  }
`;

export default Button;
