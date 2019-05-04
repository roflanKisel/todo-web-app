import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {darken} from 'polished';

const TextField = ({
  value,
  onChange,
  placeholder,
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
    <Container>
      <StyledInput
        value={value}
        onChange={onChange}
        onFocus={onInputFocuse}
        onBlur={onInputBlur}
        {...props}
      />
      <StyledLabel isFocused={isFocused}>{placeholder}</StyledLabel>
    </Container>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: '',
};

const Container = styled.div`
  position: relative;
`;

const darkDeepGreen = (theme) => darken(0.2, theme.colors.deepGreen);

const StyledInput = styled.input`
  min-width: 56px;
  max-width: calc(100% - 16px - 4px);
  height: 48px;

  border: 2px solid;
  border-color: ${({theme}) => theme.colors.grey};
  border-radius: 8px;

  font-family: ${({theme}) => theme.font.family};
  font-size: 24px;
  font-weight: normal;

  padding-left: 16px;

  transition: .3s ease-in-out;

  &:focus {
    outline: 0;
    border-color: ${({theme}) => darkDeepGreen(theme)};
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
  color: ${({theme, isFocused}) => (isFocused ? theme.colors.grey : theme.colors.lightGrey)};
  font-size: ${({isFocused}) => (isFocused ? '14px' : '18px')};;

  left: 16px;
  top: ${({isFocused}) => (isFocused ? '-10px' : '17px')};

  user-select: none;
  pointer-events: none;
`;

export default TextField;
