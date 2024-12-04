import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import { Product } from "@/types/types";

const CardsList: React.FC = () => {
  const { data: products = [], isLoading, error } = useFetchProductsQuery();

  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      <div className="product-list">
        {products.map((product: Product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 100)}...</p>
            <button>❤</button>
            <button>🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;