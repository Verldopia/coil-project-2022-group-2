import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import React, { useState } from 'react';
import {
  AccordionBox,
  CartItem,
  Cta,
  PriceCalculation,
} from '../components';
import { UseShoppingCart } from '../context/ShoppingCartContext';
import { CheckoutSteps, ROUTES } from '../constants';

// Styles
import styles from '../components/Cart/Cart.module.css';

export interface ICheckOutPageProps {}

const CheckOutPage: React.FC<ICheckOutPageProps> = (props) => {
  const [enabled, setEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);
  const { cartItems } = UseShoppingCart();

  const onExit = () => {
    localStorage.setItem('tutorial-3', '1');
    setEnabled(false);
  };

  const removeCart = () => {
    localStorage.removeItem('shopping-cart');
  };

  // Check if tutorial has already been shown
  const tutorial_3 = localStorage.getItem('tutorial-3');

  return (
    <div className="container">
      {/* // Tutorial */}
      {!tutorial_3 && (
        <div className="App">
          <Steps
            enabled={enabled}
            steps={CheckoutSteps}
            initialStep={initialStep}
            onExit={onExit}
          />
        </div>
      )}

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
            <div className={styles.cartTotal} id="step-11">
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
