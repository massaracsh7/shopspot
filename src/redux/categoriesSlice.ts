import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shopSpotApi } from "./shopSpotApi";

interface CategoriesState {
  categories: string[];
  selectedCategory: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    clearCategory(state) {
      state.selectedCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      shopSpotApi.endpoints.fetchCategories.matchFulfilled,
      (state, { payload }) => {
        state.categories = payload;
      }
    );
  },
});

export const { selectCategory, clearCategory } = categoriesSlice.actions;

export default categoriesSlice;
