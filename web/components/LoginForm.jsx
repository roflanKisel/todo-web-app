import React, {useState} from 'react';
import styled from 'styled-components';

import Paper from './Paper';
import FormTitle from './FormTitle';
import TextField from './TextField';
import Button from './Button';
import theme from '../styles/theme';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  return (
    <Paper>
      <Container {...props}>
        <FormTitle>Sign In</FormTitle>

        <TextField value={email} onChange={onChangeEmail} placeholder="E-mail" type="email" />
        <TextField value={password} onChange={onChangePassword} placeholder="Password" type="password" />

        <Link>Click here to create new account</Link>

        <StyledButton size="large" type="contained">Sign In</StyledButton>
      </Container>
    </Paper>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
`;

const StyledButton = styled(Button)`
  justify-self: center;
  margin-top: 20px;
`;

const Link = styled.a`
  margin-top: 20px;
  text-decoration: underline;
  color: ${theme.colors.grey};

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default LoginForm;
