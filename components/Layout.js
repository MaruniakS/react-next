import Header from './Header';

import styles from '../styles/base.scss';

const Layout = props => (
    <div className={`${styles["layout-component"]} layout-component`}>
      <Header />
      {props.children}
    </div>
);

export default Layout;
