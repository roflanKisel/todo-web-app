import React from 'react';
import styled from 'styled-components';
import App, {Container} from 'next/app';
import Head from 'next/head';

import Header from '../components/Header';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ComponentContainer>
          <Header />
          <Component {...pageProps} />
        </ComponentContainer>
      </Container>
    );
  }
}

const ComponentContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 100%;
  grid-row-gap: 16px;

  justify-items: center;
  max-width: 100%;
`;

export default MyApp;
