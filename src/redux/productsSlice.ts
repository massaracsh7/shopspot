import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/types';
import { shopSpotApi } from './shopSpotApi';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  isInit: boolean;
}

const loadFromLocalStorage = (): Product[] => {
  const items = localStorage.getItem('products');
  return items ? JSON.parse(items) : [];
};

const saveToLocalStorage = (products: Product[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const initialState: ProductsState = {
  products: loadFromLocalStorage(),
  loading: false,
  error: null,
  isInit: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
      saveToLocalStorage(state.products);
    },
    addProduct(state, action: PayloadAction<Product>) {
      const items = state.products.some(
        (product) => product.id === action.payload.id,
      );
      if (!items) {
        state.products.push(action.payload);
        saveToLocalStorage(state.products);
      }
    },
    editProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        saveToLocalStorage(state.products);
      }
    },
    initializeProducts(state, action: PayloadAction<Product[]>) {
      if (!state.isInit) {
        const newProducts = action.payload.filter(
          (item) => !state.products.some((product) => product.id === item.id),
        );
        state.products = [...state.products, ...newProducts];
        saveToLocalStorage(state.products);
        state.isInit = true;
      }
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
          const uniqueProducts = action.payload.filter(
            (newProduct) =>
              !state.products.some((product) => product.id === newProduct.id),
          );
          state.products = [...state.products, ...uniqueProducts];
          saveToLocalStorage(state.products);
          state.isInit = true;
          state.loading = false;
        },
      )
      .addMatcher(
        shopSpotApi.endpoints.fetchProducts.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error?.message || 'Error loading products';
        },
      );
  },
});

export const { deleteProduct, addProduct, editProduct, initializeProducts } =
  productsSlice.actions;

export default productsSlice;
