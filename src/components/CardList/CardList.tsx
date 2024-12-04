import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import { Product } from "@/types/types";
import CardItem from "../CardItem";

const CardsList: React.FC = () => {
  const { data: products = [], isLoading, error } = useFetchProductsQuery();

  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      <ul className="product-list">
        {products.map((product: Product) => (
          <CardItem product={product}/>
        ))}
      </ul>
    </div>
  );
};

export default CardsList;