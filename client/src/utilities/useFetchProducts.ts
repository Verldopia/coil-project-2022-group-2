import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../graphql/products';
import { ProductsData } from '../interfaces';

// Fetch products
export default function useFetchProducts() {
  const { data } = useQuery<ProductsData>(GET_ALL_PRODUCTS, {
    fetchPolicy: 'cache-first',
  });
  if (data) {
    return data;
  }
}
