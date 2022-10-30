import React from 'react';
import { useQuery } from '@apollo/client';
import { ProductsData } from '../interfaces';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { ProductCard } from '../components';

const WishlistPage = () => {
  // Fetch products
  const { loading, error, data } = useQuery<ProductsData>(
    GET_ALL_PRODUCTS,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Can't load wishlist.</p>;

  const wishlist = JSON.parse(localStorage.wishlist);
  console.log('🚀 - wishlist', wishlist);

  const products = data?.Items;

  for (let i = 0; i < wishlist.length; i++) {
    const product = products?.filter(
      (prod) => prod.id === wishlist[i]
    );
  }

  return (
    <ul>
      {data?.Items.filter((prod) => prod.id === wishlist[1]).map(
        (item) => (
          <ProductCard item={item} i={1} key={1} />
        )
      )}
    </ul>
  );
};

export default WishlistPage;
