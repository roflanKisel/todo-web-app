import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {darken} from 'polished';

import {Link} from '../routes';
import theme from '../styles/theme';
import TodoCard from '../components/TodoCard';
import TodoService from '../services/todo';
import {useUser} from '../hooks';
import userStorage from '../services/userStorage';

const Home = () => {
  const [user, setUser] = useUser();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const currentUser = userStorage.get();

    setUser(currentUser);

    async function fetchTodos() {
      if (currentUser) {
        const responseTodos = await TodoService.getTodos();
        setTodos(responseTodos);
      }
    }

    fetchTodos();
  }, []);

  return (
    <Container>
      {user && todos.map((todo) => <TodoCard title={todo.title} description={todo.description} />)}
      {user && (
        <Link route="/todo/create">
          <AddButton>+</AddButton>
        </Link>
      )}
      {!user && <Message>Sign In to create your todos!</Message>}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  padding: 0px 24px;
`;

const Message = styled.p`
  color: ${theme.colors.grey};
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;

  background-color: ${theme.colors.grey};
  color: white;

  width: 80px;
  height: 80px;

  font-size: 48px;

  border: none;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .2s ease;

  &:hover {
    background-color: ${darken(0.05, theme.colors.grey)};
    cursor: pointer;
  }
`;

export default Home;
