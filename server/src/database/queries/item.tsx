import { gql } from '@apollo/client';

export const getItems = gql`
  query Items {
    title
  }
`;
