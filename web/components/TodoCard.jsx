import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lighten} from 'polished';

import Paper from './Paper';
import theme from '../styles/theme';

const TodoCard = ({description, title}) => (
  <Container>
    <Paper>
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>
    </Paper>
  </Container>
);

TodoCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  max-width: 300px;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 24px;

  font-size: 24px;
  font-weight: 300;

  text-align: center;
  text-align-last: center;

  text-overflow: ellipsis;
`;

const Description = styled.p`
  padding: 0px 4px;
  margin: 0;

  max-height: 220px;

  font-size: 12px;
  font-weight: 300;

  text-align: justify;
  text-overflow: ellipsis;
  overflow: scroll;

  overflow-x: auto;

  overscroll-behavior: none;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${lighten(0.4, theme.colors.lightGrey)}; 
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.lightGrey}; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.grey}; 
  }
`;

export default TodoCard;
