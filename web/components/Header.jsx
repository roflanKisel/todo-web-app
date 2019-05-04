import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container />
);

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.grey};
  position: fixed;
  height: 50px;
  width: 100%;
`;

export default Header;
