import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct } from '@/redux/productsSlice';
import { Product } from '@/types/types';
import {
  usePostProductMutation,
  useUpdateProductMutation,
} from '@/redux/shopSpotApi';
import { RootState } from '@/redux/store';
import style from './ProductForm.module.scss';
import { schema } from '@/utils';

interface ProductFormProps {
  initialData?: Product;
  closeModal?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();
  const [postProduct] = usePostProductMutation();
  const { categories } = useSelector((state: RootState) => state.categories);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Omit<Product, 'id'>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key as keyof Omit<Product, 'id'>, value as string | number);
      });
    }
  }, [initialData, setValue]);

  const onSubmit = (data: Omit<Product, 'id'>) => {
    if (initialData && closeModal) {
      dispatch(editProduct({ ...data, id: initialData.id }));
      updateProduct({ id: initialData.id, data: { ...data } });
      closeModal();
    } else {
      dispatch(addProduct({ ...data, id: Date.now() }));
      postProduct({ ...data });
    }
    navigate('/products');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title </label>
      {errors.title && (
        <span className={style.form__error}>{errors.title.message}</span>
      )}
      <input className={style.form__input} id="title" {...register('title')} />

      <label htmlFor="price">Price </label>
      {errors.price && (
        <span className={style.form__error}>{errors.price.message}</span>
      )}
      <input
        className={style.form__input}
        id="price"
        {...register('price')}
        type="number"
      />

      <label htmlFor="description">Description </label>
      {errors.description && (
        <span className={style.form__error}>{errors.description.message}</span>
      )}
      <textarea
        className={style.form__input}
        id="description"
        {...register('description')}
      />

      <label htmlFor="category">Category </label>
      {errors.category && (
        <span className={style.form__error}>{errors.category.message}</span>
      )}
      <select
        className={style.form__input}
        id="category"
        {...register('category')}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label>Upload Image URL </label>
      {errors.image && (
        <span className={style.form__error}>{errors.image.message}</span>
      )}
      <input
        type="text"
        placeholder="https://example.com/image.jpg"
        className={style.form__input}
        id="image"
        {...register('image')}
      />

      <button className={style.form__btn} type="submit" disabled={!isValid}>
        {initialData ? 'Update Product' : 'Create Product'}
      </button>
    </form>
  );
};

export default ProductForm;
