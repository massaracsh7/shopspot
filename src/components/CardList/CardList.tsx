import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import { Product } from "@/types/types";
import CardItem from "../CardItem";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const CardsList: React.FC = () => {
  const { isLoading, error } = useFetchProductsQuery();
  const { products } = useSelector(
    (state: RootState) => state.products
  );


  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      <ul className="product-list">
        {products.map((product: Product) => (
          <CardItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default CardsList;