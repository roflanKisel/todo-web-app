import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../styles/theme';

const FormPaper = ({children}) => (
  <Container>
    {children}
  </Container>
);

FormPaper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

const padding = 40;
const margin = 8;

const Container = styled.div`
  position: relative;
  max-width: calc(100% - ${padding * 2}px - ${margin * 2}px);
  overflow: hidden;

  padding: ${padding}px;
  margin: ${margin}px;
  border-radius: 8px;
  z-index: 100;

  box-shadow: -1px 1px 24px ${theme.colors.lightGrey};

  display: flex;
  align-items: center;
  flex-direction: column;

  height: min-content;
`;

export default FormPaper;
