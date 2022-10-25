import { useQuery } from '@apollo/client';
import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { GET_ALL_PRODUCTS } from '../../graphql/products';
import { ProductsData } from '../../interfaces';
import { FormatCurrency } from '../../utilities/FormatCurrency';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

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
      className={styles.cart}
      show={isOpen}
      onHide={closeCart}
      placement="top"
    >
      <Offcanvas.Header>
        <button onClick={closeCart}>close</button>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((prod) => (
            <CartItem key={prod.id} {...prod} />
          ))}
          <div>
            total:{' '}
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
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
