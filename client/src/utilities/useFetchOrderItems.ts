import { useQuery } from '@apollo/client';
import { OrderItem } from '../interfaces';
import { GET_ALL_ITEM_ORDERS } from '../graphql/orders';

// Fetch OrderItems
export default function useFetchOrderItems() {
  const { data } = useQuery<OrderItem>(GET_ALL_ITEM_ORDERS, {
    fetchPolicy: 'cache-first',
  });
  if (data) {
    return data;
  }
}
