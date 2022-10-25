import React from 'react';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { Product } from '../../interfaces';
import styles from './AddToCart.module.css';

type AddToCartProps = { item: Product };

const AddToCart = ({ item }: AddToCartProps) => {
  const { increaseCartQuantity } = UseShoppingCart();

  return (
    <button
      className={styles.searchCart}
      onClick={() => increaseCartQuantity(item?.id)}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
