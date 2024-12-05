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
    fetchProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    deleteProductById: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
    fetchCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
  })
});

export const {
  useFetchProductsQuery,
  useFetchProductByIdQuery,
  useDeleteProductByIdMutation,
  useFetchCategoriesQuery
} = shopSpotApi;