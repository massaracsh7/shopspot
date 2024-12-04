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

export default productsSlice;
