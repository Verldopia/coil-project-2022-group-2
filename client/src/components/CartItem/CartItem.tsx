import { useQuery } from '@apollo/client';
import React from 'react';
import { Stack } from 'react-bootstrap';
import { UseShoppingCart } from '../../context/ShoppingCartContext';
import { GET_ALL_PRODUCTS } from '../../graphql/products';
import { ProductsData } from '../../interfaces';
import { FormatCurrency } from '../../utilities/FormatCurrency';

type CartItemProps = {
  id?: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has ocurred, can't load products.</p>;

  const {
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = UseShoppingCart();

  const product = data?.Items.find((prod) => {
    return prod.id === id;
  });
  if (product == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <p>{product.title}</p>
      <span>x{quantity}</span>
      <div>{FormatCurrency(product.price)}</div>
      <div>{FormatCurrency(product.price * quantity)}</div>
      <button onClick={() => removeFromCart(product.id)}>
        &times;
      </button>
      <button onClick={() => increaseCartQuantity(product.id)}>
        &times;
      </button>
      <button onClick={() => decreaseCartQuantity(product.id)}>
        &times;
      </button>
    </Stack>
  );
}

export default CartItem;
