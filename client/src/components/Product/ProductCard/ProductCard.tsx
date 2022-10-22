import React, { useState } from 'react';
import { Product } from '../../../interfaces';
import AddToCart from '../../AddToCart/AddToCart';
import styles from './ProductCard.module.css';
import { useParams } from 'react-router-dom';

type Props = {
  item: Product;
  i: number;
};

const ProductCard = ({ item, i }: Props) => {
  let { title } = useParams();
  const [id, setId] = useState(0);

  // Define route for clicked item
  const route = id ? `../../categories/${title}/${id}` : '';

  return (
    <div
      className={styles.productItem}
      key={i}
      onClick={(e) => setId(item.id)}
    >
      <img
        alt={item.title}
        className={styles.product__img}
        style={{ backgroundImage: 'var(--logo)' }}
      ></img>
      <section className={styles.product__text}>
        <a href={route} className={styles.searchBtn}>
          {item.title}
        </a>
        <span className={styles.product__price}>€{item.price}.-</span>
        <AddToCart />
      </section>
    </div>
  );
};

export default ProductCard;
