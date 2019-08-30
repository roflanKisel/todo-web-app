import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {lighten} from 'polished';

import Paper from './Paper';
import theme from '../styles/theme';
import Button from './Button';

// TODO: fit content with container

const TodoCard = ({description, title}) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <Container isCollapsed={isCollapsed}>
      <TitlePaper onClick={toggleCollapsed}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      </TitlePaper>
      <PaperContainer isCollapsed={isCollapsed}>
        <Description>
          {description}
        </Description>
        <ButtonsContainer>
          <Button size="large">Done</Button>
          <Button size="large" type="outlined">Remove</Button>
        </ButtonsContainer>
      </PaperContainer>
    </Container>
  );
};

TodoCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  width: 350px;
  height: max-content;
`;

const TitlePaper = styled(Paper)`
  &:hover {
    cursor: pointer;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const PaperContainer = styled(Paper)`
  transform-origin: center top;
  transform: ${({isCollapsed}) => (isCollapsed
    ? 'matrix3d(1,0,0.00,0,0.00,0,1.00,0.008,0,-1,0,0,0,0,0,1)'
    : 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'
  )};

  ${({isCollapsed}) => {
    if (isCollapsed) {
      return 'box-shadow: none;';
    }

    return '';
  }}

  width: 100%;
  transition: .3s ease-in-out;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;

  font-size: 24px;
  font-weight: 300;

  text-align: center;
  text-align-last: center;

  text-overflow: ellipsis;
`;

const Description = styled.p`
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

const ButtonsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 48px;
`;

export default TodoCard;
