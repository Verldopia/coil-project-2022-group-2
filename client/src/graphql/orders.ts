import { gql } from '@apollo/client';

// Get all items from orders
export const GET_ALL_ITEM_ORDERS = gql`
  query {
    itemOrders {
      orderId
      itemId
      amount
    }
  }
`;

// Get all  orders
export const GET_ALL_ORDERS = gql`
  query {
    getOrders {
      id
      user {
        id
        userName
      }
      delivered
      shipped
      orderDate
      priceTotal
    }
  }
`;

// Get items from order with order ID
export const GET_ITEMS_ORDER_ID = gql`
  query itemOrder($id: Int!) {
    itemOrder(orderId: $id) {
      orderId
      itemId
      amount
    }
  }
`;

// Create order
export const CREATE_ORDER = gql`
  mutation createOrder($input: CreateOrderInput!) {
    createOrder(createOrderInput: $input) {
      id
    }
  }
`;

// Create items for order
export const CREATE_ITEMS_ORDER = gql`
  mutation createItemsOrder($input: CreateItemsOrderInput!) {
    createItemsOrder(createItemsOrderInput: $input) {
      orderId
    }
  }
`;
