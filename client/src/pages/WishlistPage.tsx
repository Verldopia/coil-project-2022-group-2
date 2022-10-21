import React from 'react';
import Button from '../components/Button';
import Head from '../components/Head';
import Input from '../components/Input';
import ProductHead from '../components/ProductHead';
import { useQuery } from '@apollo/client';
import { ProductsData } from '../interfaces';
import { GET_ALL_PRODUCTS } from '../graphql/products';

export interface IWishlistPageProps {}

const WishlistPage: React.FC<IWishlistPageProps> = (props) => {
  return (
    <div>
      <p>wishlist...</p>
    </div>
  );
};

export default WishlistPage;
