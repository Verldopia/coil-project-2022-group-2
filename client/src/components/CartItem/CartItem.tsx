// !! Code may be similar to Web Dev Simplified: https://www.youtube.com/watch?v=lATafp15HWA.

import React, { useState } from 'react';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import {
  FormatCurrency,
  Lowercase,
  useFetchProducts,
} from '../../utilities';

// Styles
import styles from './CartItem.module.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useParams } from 'react-router-dom';
import { Tooltip } from '@mui/material';

type CartItemProps = {
  id?: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { title } = useParams();
  const [i, setId] = useState(0);

  // Fetch products
  const data = useFetchProducts();

  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = UseShoppingCart();

  const product = data?.Items.find((prod) => {
    return prod.id === id;
  });
  if (product == null) return null;

  // Define route for clicked item
  const route = i
    ? `../../categories/${
        title ?? Lowercase(product.category?.title)
      }/${id}`
    : '';

  return (
    <li
      key={product.id}
      className={styles.cartItem}
      onClick={(e) => setId(product.id)}
    >
      <div className={styles.cartItemImgBox}>
        <a href={route}>
          <img
            className={styles.cartItemImg}
            src={product.mainImage}
            alt={product.title}
          />
        </a>
      </div>
      <div className={styles.cartItemTextBox}>
        <div className={styles.cartItemHeadBox}>
          <a href={route}>
            <h5>{product.title}</h5>
          </a>
          <span>{FormatCurrency(product.price * quantity)}</span>
        </div>
        <div className={styles.cartItemAmountBox}>
          <div className={styles.cartItemAmount}>
            <button
              className={styles.cartBtn}
              onClick={() => decreaseCartQuantity(product.id)}
            >
              <Tooltip
                title="Decrease item quantity"
                arrow
                placement="bottom"
              >
                <RemoveOutlinedIcon
                  className={styles.btn}
                  fontSize="small"
                />
              </Tooltip>
            </button>
            <span>x{quantity}</span>
            <button
              className={styles.cartBtn}
              onClick={() => increaseCartQuantity(product.id)}
            >
              <Tooltip
                title="Increase item quantity"
                arrow
                placement="bottom"
              >
                <AddOutlinedIcon
                  className={styles.btn}
                  fontSize="small"
                />
              </Tooltip>
            </button>
          </div>
          <button
            className={styles.cartBtn}
            onClick={() => removeFromCart(product.id)}
          >
            <Tooltip
              title="Delete item from cart"
              arrow
              placement="bottom"
            >
              <DeleteOutlineOutlinedIcon className={styles.btn} />
            </Tooltip>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
