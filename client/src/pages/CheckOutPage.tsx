import { useQuery } from '@apollo/client';
import React from 'react';
import { AccordionBox, CartItem, Cta } from '../components';
import { UseShoppingCart } from '../context/ShoppingCartContext';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { ProductsData } from '../interfaces';
import { FormatCurrency } from '../utilities/FormatCurrency';
import { ROUTES } from '../constants';

// Styles
import styles from '../components/Cart/Cart.module.css';

export interface ICheckOutPageProps {}

const CheckOutPage: React.FC<ICheckOutPageProps> = (props) => {
  const { cartItems } = UseShoppingCart();

  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load products.</p>;

  return (
    <div className="container">
      <h1>Summary</h1>
      <div className="container--info">
        <div className="container--info__images accordion">
          <AccordionBox />
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
          <div className={styles.actionBtnBox}>
            <Cta inner="Place order" route={ROUTES.ORDERED} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
