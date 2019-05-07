import React, {useState} from 'react';
import styled from 'styled-components';

import Paper from './Paper';
import FormTitle from './FormTitle';
import TextField from './TextField';
import Button from './Button';

const RegistrationForm = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);
  const onChangeConfirmedPassword = (event) => setConfirmedPassword(event.target.value);

  return (
    <Paper title="Sign Up">
      <Container {...props}>
        <FormTitle>Sign Up</FormTitle>

        <TextField value={email} onChange={onChangeEmail} placeholder="E-mail" type="email" />
        <TextField value={username} onChange={onChangeUsername} placeholder="Username" type="text" />
        <TextField value={password} onChange={onChangePassword} placeholder="Password" type="password" />
        <TextField value={confirmedPassword} onChange={onChangeConfirmedPassword} placeholder="Confirm Password" type="password" />

        <StyledButton size="large" type="contained">Next</StyledButton>
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

export default RegistrationForm;
