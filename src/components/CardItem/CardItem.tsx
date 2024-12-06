import { toggleFavorite } from '@/redux/favoritesSlice';
import { RootState } from '@/redux/store';
import { Product } from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPen, FaRegTrashAlt, FaRegWindowClose } from 'react-icons/fa';
import { useDeleteProductByIdMutation } from '@/redux/shopSpotApi';
import { deleteProduct } from '@/redux/productsSlice';
import { useState } from 'react';
import ProductForm from '@/components/ProductForm';
import styles from './CardItem.module.scss';
import { FavoriteButton } from '../Buttons';
import IconButton from '../Buttons/IconButton';

interface CardItemProps {
  product: Product;
}

const CardItem: React.FC<CardItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProductIds = useSelector(
    (state: RootState) => state.favorites.favoriteProductIds,
  );
  const isFavorite = favoriteProductIds.includes(product.id);
  const [deleteProductById] = useDeleteProductByIdMutation();
  const [modal, setModal] = useState(false);

  const handleDeleteProduct = async () => {
    dispatch(deleteProduct(product.id));
    try {
      await deleteProductById(product.id).unwrap();
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  const handleEditOpen = () => {
    setModal(true);
  };
  const handleEditClose = () => {
    setModal(false);
  };

  return (
    <>
      {modal ? (
        <div className={styles.modal}>
          <IconButton
            icon={FaRegWindowClose}
            label=""
            onClick={handleEditClose}
          />
          <ProductForm initialData={product} closeModal={handleEditClose} />
        </div>
      ) : (
        <li className={styles.card}>
          <Link to={`${product.id}`} className={styles.card__link}>
            <img
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              className={styles.card__image}
            />
            <h3 className={styles.card__name}>{product.title}</h3>
            <p>{product.description.slice(0, 100)}...</p>
          </Link>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleToggleFavorite}
          />
          <div className={styles.card__btns}>
            <IconButton
              icon={FaRegTrashAlt}
              label="Delete"
              onClick={handleDeleteProduct}
            />
            <IconButton icon={FaPen} label="Edit" onClick={handleEditOpen} />
          </div>
        </li>
      )}
    </>
  );
};

export default CardItem;
