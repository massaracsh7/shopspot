import { clearCategory, selectCategory } from "@/redux/categoriesSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryLoader from "./CategoryLoader";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(
    (state: RootState) => state.categories
  );

  return (
    <div>
      <h3>Filter by Category</h3>
      <CategoryLoader />
      <ul>
        <li>
          <button
            onClick={() => dispatch(clearCategory())}
            style={{
              fontWeight: !selectedCategory ? "bold" : "normal",
            }}
          >
            All Categories
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => {
                if (selectedCategory === category) {
                  dispatch(clearCategory());
                } else {
                  dispatch(selectCategory(category));
                }
              }}
              style={{
                fontWeight: selectedCategory === category ? "bold" : "normal",
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
