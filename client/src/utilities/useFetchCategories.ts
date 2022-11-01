import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CategoryData } from '../interfaces';
import { GET_ALL_CATEGORIES } from '../graphql/categories';

// Fetch products
export default function useFetchProducts() {
  const { data } = useQuery<CategoryData>(GET_ALL_CATEGORIES, {
    fetchPolicy: 'cache-first',
  });
  if (data) {
    return data;
  }
}
