import { Product } from "@/types/types";

interface CardItemProps {
  product: Product;
}

const CardItem: React.FC<CardItemProps> = ({
  product
}) => {
  return (
    <li key={product.id} className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 100)}...</p>
      <button>❤</button>
      <button>🗑</button>
    </li>
  );
};

export default CardItem;