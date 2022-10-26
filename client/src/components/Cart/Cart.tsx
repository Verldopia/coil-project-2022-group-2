// !! Code may be similar to Web Dev Simplified: https://www.youtube.com/watch?v=lATafp15HWA.

import React from 'react';
import { useQuery } from '@apollo/client';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { GET_ALL_PRODUCTS } from '../../graphql/products';
import { ProductsData } from '../../interfaces';
import { FormatCurrency } from '../../utilities/FormatCurrency';
import { CartItem } from '../../components';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

// Styles
import styles from './Cart.module.css';
import { Offcanvas } from 'react-bootstrap';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from 'reactstrap';

type CartProps = {
  isOpen: boolean;
};

function Cart({ isOpen }: CartProps) {
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load products.</p>;

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
          <CloseOutlinedIcon fontSize="large" />
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
        <Button
          className={styles.actionBtn}
          tag={NavLink}
          to={ROUTES.CHECKOUT}
        >
          Check out
        </Button>
      </div>
    </Offcanvas>
  );
}

export default Cart;
