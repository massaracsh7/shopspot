import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
        <div className="container" >
        <h1 className="title">ShopSpot</h1>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link to={`/`} aria-label="Main Page" className={isActive('/') ? styles.active : ''}>
                Main Page
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link to={`/products`} aria-label="Catalog Page" className={isActive('/products') ? styles.active : ''}>
                Catalog
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link to={`/create-product`} aria-label="Create Product Page" className={isActive('/create-product') ? styles.active : ''}>
                Create product
              </Link>
            </li>
          </ul>
        </nav>
      </div >
    </header >
  );
};

export default Header;