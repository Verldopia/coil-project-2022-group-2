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

// export const CREATE_PRODUCT = gql`
//   mutation {
//     createItem(
//       $title: String!
//       $price: Int!
//       $popularity: Int!
//       $stock: Int!
//       $description: String!
//       $categoryId: Int!
//       $adminId: Int!)
//       createItemInput: {
//         title: $title
//         price: $price
//         popularity: $popularity
//         archived: false
//         approved: false
//         stock: $stock
//         description: $description
//         categoryId: $categoryId
//         adminId: $adminId
//       }
//     )
//   }
// `;
