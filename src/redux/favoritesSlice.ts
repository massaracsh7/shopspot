import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesState {
  favoriteProductIds: number[];
}

const loadFavorites = (): number[] => {
  const faves = localStorage.getItem('favoriteProducts');
  return faves ? JSON.parse(faves) : [];
};

const saveFavorites = (favorites: number[]) => {
  localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
};

const initialState: FavoritesState = {
  favoriteProductIds: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
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
      saveFavorites(state.favoriteProductIds);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice;
