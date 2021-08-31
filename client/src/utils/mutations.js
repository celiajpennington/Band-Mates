import { gql } from '@apollo/client';

// requier Login 
export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;
// Sing up requires username, email,passw, image
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;


export const SAVE_POST = gql`
    mutation saveBook($bookData: BookInput!) {
    saveBook (bookData: $bookData)
        {
            _id
            username
            email
            bookCount
            savedBooks {
               bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;


export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
       username
            email
            bookCount
            savedBooks{
                bookId
                title
                authors
                description
                image
                link
            }
    }
  }
`;
