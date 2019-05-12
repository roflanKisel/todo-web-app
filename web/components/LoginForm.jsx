import React, {useState} from 'react';
import styled from 'styled-components';

import {Link} from '../routes';
import Paper from './Paper';
import FormTitle from './FormTitle';
import TextField from './TextField';
import Button from './Button';
import theme from '../styles/theme';
import validate from '../services/validate';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const onChangeEmail = (event) => {
    setIsEmailValid(validate.email(event.target.value));
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setIsPasswordValid(validate.password(event.target.value));
    setPassword(event.target.value);
  };

  return (
    <Paper>
      <Container {...props}>
        <FormTitle>Sign In</FormTitle>

        <TextField isValid={isEmailValid} value={email} onChange={onChangeEmail} placeholder="E-mail" type="email" />
        <TextField isValid={isPasswordValid} value={password} onChange={onChangePassword} placeholder="Password" type="password" />

        <Link route="/signup">
          <StyledLink>Click here to create new account</StyledLink>
        </Link>

        <StyledButton disabled={!(isEmailValid && isPasswordValid)} size="large" type="contained">Sign In</StyledButton>
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

const StyledLink = styled.a`
  margin-top: 20px;
  text-decoration: underline;
  color: ${theme.colors.grey};

  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default LoginForm;
