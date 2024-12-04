import { toggleFavorite } from "@/redux/favoritesSlice";
import { RootState } from "@/redux/store";
import { Product } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegTrashAlt } from 'react-icons/fa';
import { useDeleteProductByIdMutation } from "@/redux/shopSpotApi";
import { deleteProduct } from "@/redux/productsSlice";
interface CardItemProps {
  product: Product;
}

const CardItem: React.FC<CardItemProps> = ({
  product
}) => {

  const dispatch = useDispatch();
  const favoriteProductIds = useSelector((state: RootState) => state.favorites.favoriteProductIds);
  const isFavorite = favoriteProductIds.includes(product.id);


  const [deleteProductById] = useDeleteProductByIdMutation();

  const handleDeleteProduct = async () => {
    dispatch(deleteProduct(product.id));
    try {
      await deleteProductById(product.id).unwrap();
      console.log(product.id);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  return (
    <li className="product-card">
      <Link to={`${product.id}`}>
        <img src={product.image} alt={product.title} width={250} height={250}/>
        <h3>{product.title}</h3>
        <p>{product.description.slice(0, 100)}...</p>
      </Link>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
      </button>
      <button onClick={handleDeleteProduct}><FaRegTrashAlt color="white" /></button>

    </li>
  );
};

export default CardItem;