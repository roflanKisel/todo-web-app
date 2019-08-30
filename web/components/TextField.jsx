import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {darken} from 'polished';

import theme from '../styles/theme';

const TextField = ({
  isValid,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocuse = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onInputBlur = useCallback(() => {
    if (!value) {
      setIsFocused(false);
    }
  }, [value]);

  return (
    <Container {...props}>
      <StyledInput
        isValid={isValid}
        onBlur={onInputBlur}
        onChange={onChange}
        onFocus={onInputFocuse}
        value={value}
        {...props}
      />
      <StyledLabel isFocused={isFocused}>{placeholder}</StyledLabel>
    </Container>
  );
};

TextField.propTypes = {
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextField.defaultProps = {
  isValid: true,
  onChange: () => {},
  placeholder: '',
  value: '',
};

const Container = styled.div`
  position: relative;
`;

const leftPadding = 16;
const borderWidth = 2;

const darkDeepGreen = darken(0.2, theme.colors.deepGreen);

const StyledInput = styled.input`
  min-width: 56px;
  width: min-content;
  max-width: calc(100% - ${leftPadding}px - ${borderWidth * 2}px);
  height: 48px;

  border: 2px solid;
  border-color: ${({isValid}) => (isValid ? theme.colors.grey : theme.colors.red)};
  border-radius: 8px;

  font-family: ${theme.font.family};
  font-size: 24px;
  font-weight: normal;

  padding-left: ${leftPadding}px;

  transition: .3s ease-in-out;

  &:focus {
    outline: 0;
    border-color: ${({isValid}) => (isValid ? darkDeepGreen : theme.colors.red)};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  overflow: hidden;

  background-color: white;
  padding: 0px 4px;
  border-radius: 8px;
  transition: .2s;

  line-height: 20px;

  font-size: ${({isFocused}) => (isFocused ? '14px' : '18px')};;

  color: ${({isFocused}) => (isFocused ? theme.colors.grey : theme.colors.lightGrey)};

  left: ${leftPadding}px;
  top: ${({isFocused}) => (isFocused ? '-10px' : '17px')};

  user-select: none;
  pointer-events: none;
`;

export default TextField;
