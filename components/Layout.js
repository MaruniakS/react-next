import Head from 'next/head';

import Header from './Header';

import styles from '../styles/base.scss';

const Layout = props => (
    <div className={`${styles["layout-component"]} layout-component`}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {props.children}
    </div>
);

export default Layout;
