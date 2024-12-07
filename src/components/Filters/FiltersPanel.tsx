import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import styles from './FiltersPanel.module.scss';
import { clearCategory, selectCategory } from '@/redux/categoriesSlice';
import CategoryLoader from '../../utils/CategoryLoader';

const FiltersPanel = ({
  onToggleFavorites,
  showFavorites,
  onTogglePage,
}: {
  onToggleFavorites: (show: boolean) => void;
  showFavorites: boolean;
  onTogglePage: (page: number) => void;
}) => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state: RootState) => state.categories,
  );

  const handleCategorySelect = (category: string | null) => {
    if (!category) {
      dispatch(clearCategory());
    } else {
      dispatch(selectCategory(category));
      onToggleFavorites(false);
      onTogglePage(1);
    }
  };

  const handleTabs = (show: boolean) => {
    onToggleFavorites(show);
    onTogglePage(1);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filters__tabs}>
        <button
          onClick={() => handleTabs(false)}
          className={!showFavorites ? styles.active : ''}
        >
          All Products
        </button>
        <button
          onClick={() => handleTabs(true)}
          className={showFavorites ? styles.active : ''}
        >
          Favorites
        </button>
      </div>

      <div className={styles.filters__categories}>
        <button
          onClick={() => handleCategorySelect(null)}
          className={!selectedCategory ? styles.active : ''}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={selectedCategory === category ? styles.active : ''}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FiltersPanel;
