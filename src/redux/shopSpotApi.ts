import { Product } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = "https://fakestoreapi.com";

export const shopSpotApi = createApi({
  reducerPath: "shopSpotApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
})
});

export const {
  useFetchProductsQuery,
} = shopSpotApi;