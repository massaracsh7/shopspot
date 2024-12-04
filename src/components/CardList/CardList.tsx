import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import { Product } from "@/types/types";
import CardItem from "../CardItem";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";

const CardsList: React.FC = () => {
  const { isLoading, error } = useFetchProductsQuery();
  const { products } = useSelector(
    (state: RootState) => state.products
  );
  const { favoriteProductIds } = useSelector((state: RootState) => state.favorites);
  const [showFavorites, setShowFavorites] = useState(false);
  const favorites = products.filter((item) => favoriteProductIds.some((id) => id === item.id));
  const filteredProducts = showFavorites ? favorites : products || [];

  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      <div className="filter">
        <button onClick={() => setShowFavorites(false)} disabled={!showFavorites}>
          Show All
        </button>
        <button onClick={() => setShowFavorites(true)} disabled={showFavorites}>
          Show Favorites
        </button>
      </div>
      <ul className="product-list">
        {filteredProducts.map((product: Product) => (
          <CardItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default CardsList;