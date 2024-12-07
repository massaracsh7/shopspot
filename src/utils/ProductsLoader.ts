import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchProductsQuery } from '@/redux/shopSpotApi';
import { initializeProducts } from '@/redux/productsSlice';
import { RootState } from '@/redux/store';

const ProductsLoader: React.FC = () => {
  const dispatch = useDispatch();
  const isInit = useSelector((state: RootState) => state.products.isInit);
  const { data, isSuccess } = useFetchProductsQuery();

  useEffect(() => {
    if (!isInit && isSuccess && data) {
      dispatch(initializeProducts(data));
    }
  }, [isInit, isSuccess, data, dispatch]);

  return null;
};

export default ProductsLoader;
