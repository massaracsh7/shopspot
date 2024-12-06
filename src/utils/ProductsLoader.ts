import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchProductsQuery } from "@/redux/shopSpotApi";
import { initializeProducts } from "@/redux/productsSlice";
import { RootState } from "@/redux/store";

const ProductsLoader: React.FC = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector(
    (state: RootState) => state.products.isInitialized
  );
  const { data, isSuccess } = useFetchProductsQuery();

  useEffect(() => {
    if (!isInitialized && isSuccess && data) {
      dispatch(initializeProducts(data));
    }
  }, [isInitialized, isSuccess, data, dispatch]);

  return null;
};

export default ProductsLoader;
