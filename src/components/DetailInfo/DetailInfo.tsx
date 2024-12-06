import { useFetchProductByIdQuery } from '@/redux/shopSpotApi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '@/redux/store';
import styles from './DetailInfo.module.scss';
import { LinkButton } from '@/components/Buttons';
import { toggleFavorite } from '@/redux/favoritesSlice';
import { FavoriteButton } from '../Buttons';
import Loader from '../Loader';

const DetailInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const favoriteProductIds = useSelector(
    (state: RootState) => state.favorites.favoriteProductIds,
  );
  const isFavorite = favoriteProductIds.includes(Number(id));
  if (id === undefined) {
    return <div>Invalid product ID</div>;
  }
  const { isLoading, error } = useFetchProductByIdQuery(Number(id));
  const product = useSelector((state: RootState) =>
    state.products.products.find((item) => item.id === Number(id)),
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  return (
    <div className={styles.detail}>
      {error && <p>Error loading data</p>}
      {isLoading && <Loader isLoading={true} height="40%" width="40%" />}
      <h2 className={styles.detail__title}>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p className={styles.detail__info}>
        <b>Price: </b>
        {product.price} $
      </p>
      <p className={styles.detail__info}>
        <b>Category: </b>
        {product.category}
      </p>
      <p className={styles.detail__info}>{product.description}</p>
      <FavoriteButton isFavorite={isFavorite} onToggle={handleToggleFavorite} />
      <LinkButton label="Go Home" to="/" />
    </div>
  );
};

export default DetailInfo;
