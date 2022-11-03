import { useQuery } from '@apollo/client';
import { Order } from '../interfaces';
import { GET_ALL_ORDERS } from '../graphql/orders';

// Fetch Orders
export default function useFetchOrders() {
  const { data } = useQuery<Order>(GET_ALL_ORDERS, {
    fetchPolicy: 'cache-first',
  });
  if (data) {
    return data;
  }
}
