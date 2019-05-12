import React, {useState} from 'react';
import styled from 'styled-components';
import validate from '../services/validate';

import {Router} from '../routes';
import Paper from './Paper';
import FormTitle from './FormTitle';
import TextField from './TextField';
import Button from './Button';
import AuthService from '../services/auth';
import tokenStorage from '../services/tokenStorage';
import userStorage from '../services/userStorage';

const RegistrationForm = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [arePasswordsEqual, setArePasswordsEqual] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const onChangeEmail = (event) => {
    setIsEmailValid(validate.email(event.target.value));
    setEmail(event.target.value);
  };

  const onChangeUsername = (event) => {
    setIsUsernameValid(validate.username(event.target.value));
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setArePasswordsEqual(
      event.target.value === confirmedPassword
      && validate.password(event.target.value),
    );
    setPassword(event.target.value);
  };

  const onChangeConfirmedPassword = (event) => {
    setArePasswordsEqual(event.target.value === password);
    setConfirmedPassword(event.target.value);
  };

  const onClickSignUp = async () => {
    try {
      const data = await AuthService.signup({email, username, password});

      tokenStorage.set(data.token);
      userStorage.set(data.user);

      Router.push('/');
    } catch ({response}) {
      if (response.data) {
        setErrorMessage(response.data.message);
      }
    }
  };

  return (
    <Paper title="Sign Up">
      <Container {...props}>
        <FormTitle>Sign Up</FormTitle>

        <TextField isValid={isEmailValid} value={email} onChange={onChangeEmail} placeholder="E-mail" type="email" />
        <TextField isValid={isUsernameValid} value={username} onChange={onChangeUsername} placeholder="Username" type="text" />
        <TextField isValid={arePasswordsEqual} value={password} onChange={onChangePassword} placeholder="Password" type="password" />
        <TextField isValid={arePasswordsEqual} value={confirmedPassword} onChange={onChangeConfirmedPassword} placeholder="Confirm Password" type="password" />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <StyledButton
          disabled={!(isEmailValid && isUsernameValid && arePasswordsEqual)}
          onClick={onClickSignUp}
          size="large"
          type="contained"
        >
          Next
        </StyledButton>
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  width: 100%;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

export default RegistrationForm;
