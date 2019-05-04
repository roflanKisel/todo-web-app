import React, {useState} from 'react';
import styled from 'styled-components';

import TextField from './TextField';
import Button from './Button';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  return (
    <Container {...props}>
      <Title>Sign In</Title>

      <TextField value={email} onChange={onChangeEmail} placeholder="E-mail" type="email" />
      <TextField value={password} onChange={onChangePassword} placeholder="Password" type="password" />

      <StyledButton size="large" type="outlined">Sign In</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;

  font-size: 32px;
  font-weight: normal;

  justify-self: center;
`;

const StyledButton = styled(Button)`
  justify-self: center;
`;

export default LoginForm;
