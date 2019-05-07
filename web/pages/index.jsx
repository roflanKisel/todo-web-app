import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import TodoEditor from '../components/TodoEditor';

const Home = () => (
  <Container>
    <Header />
    <TodoEditor />
  </Container>
);

const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 100%;
  grid-row-gap: 16px;

  justify-items: center;
  max-width: 100%;
`;

export default Home;
