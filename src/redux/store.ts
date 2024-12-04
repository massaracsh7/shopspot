import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import { shopSpotApi } from "./shopSpotApi";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    [shopSpotApi.reducerPath]: shopSpotApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopSpotApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;