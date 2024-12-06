import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './FavoriteButton.module.scss';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggle,
}) => {
  return (
    <button
      className={styles.favorite}
      onClick={onToggle}
      aria-label="Toggle Favorite"
    >
      {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
    </button>
  );
};

export default FavoriteButton;
