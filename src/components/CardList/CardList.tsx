import React from 'react';
import CardItem from '../CardItem';
import { Product } from '@/types/types';
import styles from './CardList.module.scss';
interface CardListProps {
  products: Product[];
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <ul className={styles.cards__list}>
      {products?.map((product: Product) => (
        <CardItem product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default CardList;
