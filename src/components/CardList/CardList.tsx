import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import { Product } from "@/types/types";
import CardItem from "../CardItem";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CategoryFilter } from "../Categories";

const CardsList: React.FC = () => {
  const { isLoading, error } = useFetchProductsQuery();
  const { products } = useSelector(
    (state: RootState) => state.products
  );

  const { favoriteProductIds } = useSelector((state: RootState) => state.favorites);
  const [showFavorites, setShowFavorites] = useState(false);

  const { selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  const filteredByCategory = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const favorites = products.filter((item) => favoriteProductIds.some((id) => id === item.id));
  const filteredProducts = showFavorites ? favorites : filteredByCategory || [];

  const [page, setPage] = useState(1);
  const limit = 5;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts?.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (filteredProducts && page < Math.ceil(filteredProducts.length / limit)) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleFilter = (show: boolean) => {
    setPage(1);
    setShowFavorites(show);
  }

  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      <div className="filter">
        <button onClick={() => handleFilter(false)} disabled={!showFavorites}>
          Show All
        </button>
        <button onClick={() => handleFilter(true)} disabled={showFavorites}>
          Show Favorites
        </button>
      </div>
      <CategoryFilter />
      <ul className="product-list">
        {paginatedProducts?.map((product: Product) => (
          <CardItem product={product} key={product.id} />
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={page >= Math.ceil(products.length / limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardsList;