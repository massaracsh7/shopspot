import { toggleFavorite } from "@/redux/favoritesSlice";
import { RootState } from "@/redux/store";
import { Product } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegTrashAlt } from 'react-icons/fa';
import { useDeleteProductByIdMutation } from "@/redux/shopSpotApi";
import { deleteProduct } from "@/redux/productsSlice";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

interface CardItemProps {
  product: Product;
}

const CardItem: React.FC<CardItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteProductIds = useSelector((state: RootState) => state.favorites.favoriteProductIds);
  const isFavorite = favoriteProductIds.includes(product.id);
  const [deleteProductById] = useDeleteProductByIdMutation();
  const [modal, setModal] = useState(false);

  const handleDeleteProduct = async () => {
    dispatch(deleteProduct(product.id));
    try {
      await deleteProductById(product.id).unwrap();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  const handleEditProduct = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <div className="modal">
          <ProductForm initialData={product} />
          <button onClick={handleEditProduct}>Close</button>
        </div>
      ) : (
        <li className="product-card">
          <Link to={`${product.id}`}>
            <img src={product.image} alt={product.title} width={250} height={250} />
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 100)}...</p>
          </Link>
          <button onClick={handleToggleFavorite}>
            {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
          </button>
          <button onClick={handleDeleteProduct}><FaRegTrashAlt color="gray" /></button>
          <button onClick={handleEditProduct}>Edit</button>
        </li>
      )}
    </>
  );
};

export default CardItem;
