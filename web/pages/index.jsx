import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Button from '../components/Button';

const Home = () => (
  <>
    <Header />
    <StyledButton />
  </>
);

const StyledButton = styled(Button)`
  margin-top: 150px;
  margin-left: 150px;
`;

export default Home;
