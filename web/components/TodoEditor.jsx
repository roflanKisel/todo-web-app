import React, {useState} from 'react';
import styled from 'styled-components';

import Paper from './Paper';
import TextArea from './TextArea';
import TextField from './TextField';
import FormTitle from './FormTitle';
import Button from './Button';

const TodoEditor = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeDescription = (event) => setDescription(event.target.value);

  return (
    <Paper {...props}>
      <Container {...props}>
        <FormTitle>Todo Details</FormTitle>

        <TextField onChange={onChangeTitle} placeholder="Title" value={title} />
        <TextArea height={112} onChange={onChangeDescription} placeholder="Description" value={description} />

        <ButtonsContainer>
          <Button size="large" type="outlined">Back</Button>
          <Button size="large">Save</Button>
        </ButtonsContainer>
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

const ButtonsContainer = styled.div`
  width: 100%;
  justify-self: center;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

export default TodoEditor;
