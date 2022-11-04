import React from 'react';
import {
  AccordionBox,
  CartItem,
  Cta,
  PriceCalculation,
} from '../components';
import { UseShoppingCart } from '../context/ShoppingCartContext';
import { ROUTES } from '../constants';

// Styles
import styles from '../components/Cart/Cart.module.css';

export interface ICheckOutPageProps {}

const CheckOutPage: React.FC<ICheckOutPageProps> = (props) => {
  const { cartItems } = UseShoppingCart();

  const removeCart = () => {
    localStorage.removeItem('shopping-cart');
  };

  return (
    <div className="container">
      <h1>Summary</h1>
      <div className="container--info">
        <div className="container--info__images accordion">
          <AccordionBox />
        </div>
        <div className={styles.cartBody}>
          <ul className={styles.cartItems}>
            {cartItems?.map((prod) => (
              <CartItem key={prod.id} {...prod} />
            ))}
            <div className={styles.cartTotal}>
              <PriceCalculation cartItems={cartItems} />
            </div>
          </ul>
          {cartItems[0] && (
            <div className={styles.actionBtnBox} onClick={removeCart}>
              <Cta inner="Place order" route={ROUTES.ORDERED} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
