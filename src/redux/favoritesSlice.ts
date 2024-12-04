import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  favoriteProductIds: number[];
}

const initialState: FavoritesState = {
  favoriteProductIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const index = state.favoriteProductIds.indexOf(productId);
      if (index === -1) {
        state.favoriteProductIds.push(productId);
      } else {
        state.favoriteProductIds.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice;