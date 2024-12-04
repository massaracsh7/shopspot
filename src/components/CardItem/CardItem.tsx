import { toggleFavorite } from "@/redux/favoritesSlice";
import { RootState } from "@/redux/store";
import { Product } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
interface CardItemProps {
  product: Product;
}

const CardItem: React.FC<CardItemProps> = ({
  product
}) => {

  const dispatch = useDispatch();
  const favoriteProductIds = useSelector((state: RootState) => state.favorites.favoriteProductIds);
  const isFavorite = favoriteProductIds.includes(product.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  return (
    <li key={product.id} className="product-card">
      <Link to={`${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description.slice(0, 100)}...</p>
      </Link>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
      </button>
      <button>🗑</button>

    </li>
  );
};

export default CardItem;