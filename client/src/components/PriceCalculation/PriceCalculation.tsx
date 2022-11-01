import React from 'react';
import { CartItem } from '../../interfaces';
import {
  FormatCurrency,
  useFetchDiscount,
  useFetchProducts,
} from '../../utilities';

import styles from './PriceCalculation.module.css';

type Props = {
  cartItems: CartItem[];
};

function PriceCalculation({ cartItems }: Props) {
  const data = useFetchProducts();

  // Get data from sessionStorage
  const discount = sessionStorage.getItem('discountCode');
  const discountData = useFetchDiscount({ code: discount });
  const d = discountData?.getDiscount;
  console.log('🚀 - d', d?.discountPrice);
  console.log('🚀 - d', d?.discountPercentage);

  // Calculate total product price
  const total = cartItems.reduce((total, cartItem) => {
    const product = data?.Items.find(
      (prod) => prod.id === cartItem.id
    );
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);

  // Calculate taxes amount
  const untaxed = (total / 100) * 21;

  // Calculate total product price without taxes
  const untaxedTotal = total - untaxed;

  // Calculate price discount
  const discPrice = d?.discountPrice
    ? untaxedTotal - d.discountPrice
    : 0;

  // Calculate percentage total
  let discPer = d?.discountPercentage
    ? (untaxedTotal / 100) * d.discountPercentage
    : 0;
  discPer !== 0 ? (discPer = untaxedTotal - discPer) : 0;

  // Calculate complete total
  const comTotalPer = discPer + untaxed + 4.95;
  const comTotalPrice = discPrice + untaxed + 4.95;
  console.log('🚀 - discPrice', discPrice);
  console.log('🚀 - discPer', discPer);

  return (
    <div className={styles.totalBox}>
      <div className={styles.boxEnd}>
        <p>{FormatCurrency(untaxedTotal)}</p>
      </div>

      {/* // Display discount percentage box */}
      <div className={styles.box}>
        {discPrice !== 0 && (
          <>
            <p>Discount {d?.code}:</p>
            <p className="bold">{FormatCurrency(discPrice)}</p>
          </>
        )}
        {discPer !== 0 && (
          <>
            <p>Discount {d?.code}:</p>
            <p className="bold">{FormatCurrency(discPer)}</p>
          </>
        )}
      </div>

      {/* // Display tax */}
      <div className={styles.box}>
        <p>Tax:</p>
        <p>{FormatCurrency(untaxed)}</p>
      </div>

      {/* // Display shipping */}
      <div className={styles.box}>
        <p>Shipping:</p>
        <p>€4.95</p>
      </div>

      {/* // Display total price */}
      <div className={styles.box}>
        {discPer !== 0 && (
          <>
            <h5>Total:</h5>
            <p className="bold">{FormatCurrency(comTotalPer)}</p>
          </>
        )}
        {discPrice !== 0 && (
          <>
            <h5>Total:</h5>
            <p className="bold">{FormatCurrency(comTotalPrice)}</p>
          </>
        )}
        {discPrice === 0 && discPer === 0 && (
          <>
            <h5>Total:</h5>
            <p className="bold">{FormatCurrency(total + 4.95)}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default PriceCalculation;
