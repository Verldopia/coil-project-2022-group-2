import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Discount } from '../interfaces';
import { GET_DISCOUNT_CODE } from '../graphql/discount';

// Fetch Discount
export default function useFetchDiscount(vars: {
  code: string | null;
}) {
  const { data } = useQuery<Discount>(GET_DISCOUNT_CODE, {
    variables: vars,
    fetchPolicy: 'cache-first',
  });
  if (data) {
    return data;
  }
}
