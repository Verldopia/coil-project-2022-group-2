import React, { useState } from 'react';
import { Product } from '../../../interfaces';
import AddToCart from '../../AddToCart/AddToCart';
import { useParams } from 'react-router-dom';
import { Lowercase, Slugify } from '../../../utilities/TextTransform';
import { FormatCurrency } from '../../../utilities/FormatCurrency';

// Styles
import styles from './ProductCard.module.css';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { Tooltip } from '@mui/material';

type ProductCardProps = {
  button?: boolean;
  item: Product;
  i: number;
};

const ProductCard = ({ button, item, i }: ProductCardProps) => {
  const { title } = useParams();
  const [id, setId] = useState(0);

  // Define route for clicked item
  const route = id
    ? `../../categories/${
        title ?? Lowercase(item.category?.title)
      }/${id}=${Slugify(item.title)}`
    : '';

  // When clicked, remove product from localStorage
  function removeProduct() {
    const wishlist = JSON.parse(localStorage.wishlist);

    // Filter where clickedID === productID
    const newWishlist = wishlist.filter(
      (id: number) => id !== item.id
    );

    // Set new array to localStorage
    localStorage.setItem(
      'wishlist',
      JSON.stringify([...new Set(newWishlist)])
    );
    window.location.reload();
  }

  return (
    <>
      <li
        className={styles.productItem}
        key={i}
        onClick={(e) => setId(item.id)}
      >
        {button && (
          <button
            className={styles.btnDelete}
            onClick={removeProduct}
          >
            <Tooltip
              title="Remove from wishlist"
              arrow
              placement="bottom"
            >
              <HeartBrokenIcon color="info" />
            </Tooltip>
          </button>
        )}
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
      </li>
    </>
  );
};

export default ProductCard;
