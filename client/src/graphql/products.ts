import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query Items {
    Items {
      id
      title
      price
      description
      approved
      archived
      category {
        id
        title
      }
      images
    }
  }
`;
