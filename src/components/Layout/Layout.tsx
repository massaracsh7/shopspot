import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
