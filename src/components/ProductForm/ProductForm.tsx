import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/productsSlice';
import { Product } from '@/types/types';

const ProductForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
    image: Yup.string().url('Invalid URL format').required('Image URL is required'),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Omit<Product, 'id'>>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...data,
      id: Date.now(),
    };
    dispatch(addProduct(newProduct));
    navigate('/', { replace: true });
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='title'>Title </label>
      {errors.title && <span className='form__error'>{errors.title.message}</span>}
      <input className='form__input' id='title' {...register('title')} />

      <label htmlFor='price'>Price </label>
      {errors.price && <span className='form__error'>{errors.price.message}</span>}
      <input className='form__input' id='price' {...register('price')} type='number' />

      <label htmlFor='description'>Description </label>
      {errors.description && <span className='form__error'>{errors.description.message}</span>}
      <textarea className='form__input' id='description' {...register('description')} />

      <label htmlFor='category'>Category </label>
      {errors.category && <span className='form__error'>{errors.category.message}</span>}
      <input className='form__input' id='category' {...register('category')} />

      <label>Upload Image URL </label>
      {errors.image && <span className='form__error'>{errors.image.message}</span>}
      <input
        type='text'
        placeholder='https://example.com/image.jpg'
        className='form__input' id='image' {...register('image')}
      />

      <button className='form__btn' type='submit' disabled={!isValid}>
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;