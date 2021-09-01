import { gql } from '@apollo/client';


 export const QUERY_USER = gql`
    query user {
      users{
      _id
      username
      email
    posts {
     _id
      username
     instrument
     description
     genre
     image
     title

    }
  }
}
  `;

