import { gql } from '@apollo/client';

export const GET_DISCOUNT_ID = gql`
  query getDiscount($id: Int!) {
    getDiscount(id: $id) {
      id
      code
      description
      discountPrice
      discountPercentage
      timesUsed
    }
  }
`;
