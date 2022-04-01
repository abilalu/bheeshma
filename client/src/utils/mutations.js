import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!, $datePeriods: String!) {
    addOrder(products: $products, datePeriods: $datePeriods) {
      orderDate
      datePeriods
      products {
        _id
        brand
        productItem
        rentamount
        quantity
        image
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNumber: String
    $mailList: Boolean
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      mailList: $mailList
    ) {
      token
      user {
        _id
      }
    }
  }
`;
