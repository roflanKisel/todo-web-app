import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }
`;

export default class MyApp extends App {
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
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
