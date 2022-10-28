import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query getUser($id: Int!) {
    getUser(id: $id) {
      id
      userName
      email
    }
  }
`;

export const GET_USER_LOGIN = gql`
  query getUserName($userName: String!) {
    getUserName(userName: $userName) {
      id
      userName
      email
    }
  }
`;
