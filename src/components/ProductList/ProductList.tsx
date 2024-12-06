import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import CardList from "../CardList";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import FiltersPanel from "../Categories/FiltersPanel";
import styles from "./ProductList.module.scss";


const CardsList: React.FC = () => {
  const { isLoading, error } = useFetchProductsQuery();
  const { products } = useSelector((state: RootState) => state.products);
  const { favoriteProductIds } = useSelector((state: RootState) => state.favorites);
  const { selectedCategory } = useSelector((state: RootState) => state.categories);

  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 8;

  const filteredProducts = showFavorites
    ? products.filter((item) => favoriteProductIds.includes(item.id))
    : selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * limit,
    page * limit
  );

  const handleNextPage = () => {
    if (page < Math.ceil(filteredProducts.length / limit)) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      {error && <p>Error loading  data</p>}
      {isLoading && <p>Loading ...</p>}
      {/* <div className="filter">
        <button onClick={() => handleFilter(false)} disabled={!showFavorites}>
          Show All
        </button>
        <button onClick={() => handleFilter(true)} disabled={showFavorites}>
          Show Favorites
        </button>
      </div>
      <CategoryFilter /> */}

      <FiltersPanel
        onToggleFavorites={setShowFavorites}
        showFavorites={showFavorites}
        onTogglePage={setPage}
      />


      <CardList products={paginatedProducts} />

      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={page >= Math.ceil(filteredProducts.length / limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardsList;