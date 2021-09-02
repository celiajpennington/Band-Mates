const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }
  type Post{
   _id: ID
   username: String
   instrument: String
   description: String
   genre: String
   image: String
   title: String 

  }
  type Comment {
   _id: ID
   username: String
   comment: String
   
  }
  input PostInput {
    _id: ID
   username: String
   instrument: String
   description: String
   genre: String
   image: String
   title: String
  
}

  type Auth {
    token: ID
    user: User
  }

  type Query {
    allPosts:[Post]
    users:[User]
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postInput: PostInput! ):Post
    addComment(postInput: CommentInput! ): Post
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
