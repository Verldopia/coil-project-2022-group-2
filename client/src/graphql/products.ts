import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query Items {
    Items {
      id
      title
      price
      stock
      mainImage
      popularity
      description
      discountId
      approved
      archived
      type
      category {
        id
        title
        description
      }
      images
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation createItem($input: CreateItemInput!) {
    createItem(createItemInput: $input) {
      id
    }
  }
`;
