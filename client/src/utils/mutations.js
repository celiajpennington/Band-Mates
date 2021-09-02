import { gql } from '@apollo/client';

// Login requires email,password
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    username
    
    }
  }
}
`;
// Sing up requires username, email,password, image
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


export const ADD_POST = gql`
  mutation addPost($postInput: PostInput! ) {
  addPost(postInput: $postInput)
       {

        _id
            username
            email
            
            post{

           
              _id
             username
              instrument
              description
                genre
                image
                title
           }
      
          } }
  `;


