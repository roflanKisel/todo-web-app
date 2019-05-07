import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {darken} from 'polished';

import theme from '../styles/theme';

const TextArea = ({
  height,
  isValid,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocuse = () => {
    setIsFocused(true);
  };

  const onInputBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <Container {...props}>
      <StyledTextArea
        height={height}
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

TextArea.propTypes = {
  height: PropTypes.number,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextArea.defaultProps = {
  height: 48,
  isValid: true,
  onChange: () => {},
  placeholder: '',
  value: '',
};

const Container = styled.div`
  position: relative;
`;

const padding = 16;
const borderWidth = 2;

const darkDeepGreen = darken(0.2, theme.colors.deepGreen);

const StyledTextArea = styled.textarea`
  min-width: 56px;
  width: min-content;
  max-width: calc(100% - ${padding * 2}px - ${borderWidth * 2}px);
  height: ${({height}) => height}px;

  border: 2px solid;
  border-color: ${({isValid}) => (isValid ? theme.colors.grey : theme.colors.red)};
  border-radius: 8px;

  font-family: ${theme.font.family};
  font-size: 24px;
  font-weight: normal;

  resize: none;

  padding: ${padding}px ${padding}px 0px;

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

  left: ${padding}px;
  top: ${({isFocused}) => (isFocused ? '-10px' : '17px')};

  user-select: none;
  pointer-events: none;
`;

export default TextArea;
