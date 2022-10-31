import React from 'react';
import { AccordionBox, CartItem, Cta } from '../components';
import { UseShoppingCart } from '../context/ShoppingCartContext';
import { FormatCurrency, useFetchProducts } from '../utilities';
import { ROUTES } from '../constants';

// Styles
import styles from '../components/Cart/Cart.module.css';

export interface ICheckOutPageProps {}

const CheckOutPage: React.FC<ICheckOutPageProps> = (props) => {
  const data = useFetchProducts();
  const { cartItems } = UseShoppingCart();

  console.log('🚀 - data', data);

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
