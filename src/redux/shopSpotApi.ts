import { Product } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_URL = 'https://fakestoreapi.com';

export const shopSpotApi = createApi({
  reducerPath: 'shopSpotApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    fetchProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    deleteProductById: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      { id: number; data: Omit<Product, 'id'> }
    >({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    postProduct: builder.mutation<void, Omit<Product, 'id'>>({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
    }),
    fetchCategories: builder.query<string[], void>({
      query: () => '/products/categories',
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductByIdQuery,
  useDeleteProductByIdMutation,
  useFetchCategoriesQuery,
  useUpdateProductMutation,
  usePostProductMutation,
} = shopSpotApi;
