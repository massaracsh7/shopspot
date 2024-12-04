import { Product } from "@/types/types";
import { Link } from "react-router-dom";

interface CardItemProps {
  product: Product;
}

const CardItem: React.FC<CardItemProps> = ({
  product
}) => {
  return (
    <li key={product.id} className="product-card">
      <Link to={`${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description.slice(0, 100)}...</p>
      </Link>
      <button>❤</button>
      <button>🗑</button>

    </li>
  );
};

export default CardItem;