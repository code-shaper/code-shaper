import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components';

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title><%= itemNameCapitalCase %></title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </React.Fragment>
  );
};

export default HomePage;
