import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import CardList from '../CardList';
import FiltersPanel from '../Filters/FiltersPanel';
import styles from './ProductList.module.scss';
import { PaginationButton } from '../Buttons';
import Loader from '../Loader';

const ProductList: React.FC = () => {
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const { favoriteProductIds } = useSelector((state: RootState) => state.favorites);
  const { selectedCategory } = useSelector((state: RootState) => state.categories);

  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 8;

  const filteredProducts = useMemo(() => {
    if (showFavorites) {
      return products.filter((item) => favoriteProductIds.includes(item.id));
    }
    if (selectedCategory) {
      return products.filter((product) => product.category === selectedCategory);
    }
    return products;
  }, [products, showFavorites, favoriteProductIds, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / limit);
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice((page - 1) * limit, page * limit);
  }, [filteredProducts, page, limit]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      {error && <p>Error loading data</p>}
      {loading && <Loader isLoading={true} height="40%" width="40%" />}
      <FiltersPanel
        onToggleFavorites={setShowFavorites}
        showFavorites={showFavorites}
        onTogglePage={setPage}
      />
      <CardList products={paginatedProducts} />
      <div className={styles.pagination}>
        <PaginationButton
          label="Previous"
          onClick={handlePrevPage}
          disabled={page === 1}
          ariaLabel="Previous Page"
        />
        <span>Page {page} of {totalPages}</span>
        <PaginationButton
          label="Next"
          onClick={handleNextPage}
          disabled={page >= totalPages}
          ariaLabel="Next Page"
        />
      </div>
    </div>
  );
};

export default ProductList;
