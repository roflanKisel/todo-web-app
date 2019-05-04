import React from 'react';
import styled from 'styled-components';
import {darken} from 'polished';

import Button from './Button';

const Header = () => (
  <Container>
    <TitleContainer>
      <Title>Todo Web App</Title>
    </TitleContainer>
    <StyledButton size="medium">Sign In</StyledButton>
  </Container>
);

const Container = styled.div`
  position: fixed;
  height: 64px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.grey};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  height: 100%;
  width: max-content;

  display: flex;
  align-items: center;

  transition: .2s ease;

  &:hover {
    background-color: ${({theme}) => darken(0.05, theme.colors.grey)};
    cursor: pointer;
  }
`;

const Title = styled.h2`
  color: white;
  font-weight: normal;
  padding: 0px 16px;
  margin: 0;
`;

const StyledButton = styled(Button)`
  margin: 0px 10px;
`;

export default Header;
