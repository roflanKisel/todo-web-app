import React, {useEffect} from 'react';
import styled from 'styled-components';
import {darken} from 'polished';

import userStorage from '../services/userStorage';
import {Link} from '../routes';
import theme from '../styles/theme';
import Button from './Button';
import {useUser} from '../hooks';

const Header = (props) => {
  const [user, setUser, removeUser] = useUser();

  useEffect(() => {
    setUser(userStorage.get());
  });

  const onSignOut = () => removeUser();

  return (
    <Container {...props}>
      <Link route="/">
        <TitleContainer>
          <Title>Todo Web App</Title>
        </TitleContainer>
      </Link>
      {user && (
        <UserInfoContainer>
          {user.email}
          <StyledButton onClick={onSignOut} size="medium">Sign Out</StyledButton>
        </UserInfoContainer>
      )}
      {!user && (
        <Link route="/signin">
          <StyledButton size="medium">Sign In</StyledButton>
        </Link>
      )}
    </Container>
  );
};

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

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  cursor: default;
`;

const StyledButton = styled(Button)`
  margin: 0px 10px;
`;

export default Header;
