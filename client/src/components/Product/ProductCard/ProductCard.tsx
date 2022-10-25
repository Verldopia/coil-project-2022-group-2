import React, { useState } from 'react';
import { Product } from '../../../interfaces';
import AddToCart from '../../AddToCart/AddToCart';
import styles from './ProductCard.module.css';
import { useParams } from 'react-router-dom';
import { Lowercase } from '../../../utilities/TextTransform';
import { FormatCurrency } from '../../../utilities/FormatCurrency';

type ProductCardProps = {
  item: Product;
  i: number;
};

const ProductCard = ({ item, i }: ProductCardProps) => {
  const { title } = useParams();
  const [id, setId] = useState(0);

  // Define route for clicked item
  const route = id
    ? `../../categories/${
        title ?? Lowercase(item.category?.title)
      }/${id}`
    : '';

  return (
    <div
      className={styles.productItem}
      key={i}
      onClick={(e) => setId(item.id)}
    >
      {' '}
      <div className={styles.product__imgBox}>
        <a href={route}>
          <img
            src={item.mainImage}
            alt={item.title}
            className={styles.product__img}
          />
        </a>
      </div>
      <section className={styles.product__text}>
        <a href={route} className={styles.searchBtn}>
          {item.title}
        </a>
        <span className={styles.product__price}>
          {FormatCurrency(item.price)}
        </span>
        <AddToCart item={item} />
      </section>
    </div>
  );
};

export default ProductCard;
