import React from 'react';
import styled from 'styled-components';
import {darken} from 'polished';

import {Link} from '../routes';
import theme from '../styles/theme';
import Button from './Button';

const Header = (props) => (
  <Container {...props}>
    <Link route="/">
      <TitleContainer>
        <Title>Todo Web App</Title>
      </TitleContainer>
    </Link>
    <Link route="/signin">
      <StyledButton size="medium">Sign In</StyledButton>
    </Link>
  </Container>
);

const Container = styled.div`
  max-width: 100%;
  height: 64px;
  width: 100%;
  background-color: ${theme.colors.grey};

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
    background-color: ${darken(0.05, theme.colors.grey)};
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
