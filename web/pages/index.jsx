import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Home = () => (
  <Container>
    <Header />
    <LoginForm />
  </Container>
);

const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-row-gap: 16px;

  justify-items: center;
  align-items: center;
`;

// const StyledLoginForm = styled(LoginForm)`
//   padding-bottom: 80px;
// `;

export default Home;
