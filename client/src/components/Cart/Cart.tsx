// !! Code may be similar to Web Dev Simplified: https://www.youtube.com/watch?v=lATafp15HWA.

import React from 'react';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { FormatCurrency, useFetchProducts } from '../../utilities';
import { CartItem, Cta } from '../../components';
import { ROUTES } from '../../constants/routes';

// Styles
import styles from './Cart.module.css';
import { Offcanvas } from 'react-bootstrap';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Tooltip } from '@mui/material';

type CartProps = {
  isOpen: boolean;
};

function Cart({ isOpen }: CartProps) {
  // Fetch products
  const data = useFetchProducts();

  const { closeCart, cartItems } = UseShoppingCart();

  return (
    <Offcanvas
      className={styles.cartContainer}
      show={isOpen}
      onHide={closeCart}
    >
      <div className={styles.cartHeader}>
        <h2>Cart</h2>
        <button className={styles.cartBtn} onClick={closeCart}>
          <Tooltip title="Close cart" arrow placement="bottom">
            <CloseOutlinedIcon fontSize="large" />
          </Tooltip>
        </button>
      </div>
      <div className={styles.cartBody}>
        <ul className={styles.cartItems}>
          {cartItems.map((prod) => (
            <CartItem key={prod.id} {...prod} />
          ))}
          <div className={styles.cartTotal}>
            Total:{' '}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const product = data?.Items.find(
                  (prod) => prod.id === cartItem.id
                );
                return (
                  total + (product?.price || 0) * cartItem.quantity
                );
              }, 0)
            )}
          </div>
        </ul>
      </div>
      <div className={styles.actionBtnBox}>
        <Cta inner="Check out" route={ROUTES.CHECKOUT} />
      </div>
    </Offcanvas>
  );
}

export default Cart;
