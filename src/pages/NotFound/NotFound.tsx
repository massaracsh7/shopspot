import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__message}>404 - Page Not Found</div>
      <div className={styles.notFound__description}>
        Sorry, the page you are looking for does not exist.
      </div>
      <Link to="/" className={styles.notFound__link}>
        Go back to Main Page
      </Link>
    </div>
  );
};

export default NotFound;
