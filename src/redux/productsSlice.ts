import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/types";
import { shopSpotApi } from "./shopSpotApi";

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(shopSpotApi.endpoints.fetchProducts.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(
        shopSpotApi.endpoints.fetchProducts.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addMatcher(
        shopSpotApi.endpoints.fetchProducts.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error?.message || "Error loading products";
        }
      );
  },
});

export const { deleteProduct } = productsSlice.actions;
export default productsSlice;
