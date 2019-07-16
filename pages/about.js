import Head from 'next/head';


import Layout from '../components/Layout.js';

export default function About() {
  return (
      <Layout>
        <Head>
          <title>About page</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p>This is the about page</p>
      </Layout>
  );
}
