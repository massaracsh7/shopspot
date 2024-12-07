import { LinkButton } from '@/components/Buttons';
import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.hero__inner}>
        <div className={styles.hero__banner}>
          <img src="/banner.webp" alt="Shop Banner" />
        </div>
        <h1 className="title">Welcome to ShopSpot</h1>
        <p className={styles.hero__description}>
          Discover a curated selection of the latest in fashion, cutting-edge
          electronics, and timeless jewelry. Shop with confidence and find
          something that suits your style and needs today!
        </p>
        <LinkButton label="Shop Now" to="/products" />
      </div>
    </div>
  );
};

export default MainPage;
