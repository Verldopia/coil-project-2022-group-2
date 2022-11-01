import { gql } from '@apollo/client';

export const GET_DISCOUNTS = gql`
  query getAllDiscounts {
    getAllDiscounts {
      id
      code
      description
      discountPrice
      discountPercentage
      timesUsed
    }
  }
`;

export const GET_DISCOUNT_CODE = gql`
  query getDiscount($code: String!) {
    getDiscount(code: $code) {
      id
      code
      description
      discountPrice
      discountPercentage
      timesUsed
    }
  }
`;
