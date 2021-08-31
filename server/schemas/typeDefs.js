const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedPosts: [Post]
  }
  type Post{
   username: String
   instrument: String
   description: String
   genre: String
   image: String
   title: String
   comment: [Comment]
  }
  type Comment {
   username: String
   comment: String
   
  }
  input PostInput {
   username: String
   instrument: String
   description: String
   genre: String
   image: String
   title: String
   comment: [Comment]

}

  type Auth {
    token: ID
    user: User
  }

  type Query {
    post: [Post]
    allPosts (username:String!, instrument: String!, description:String!, genre: String!,image:String!, title: String!)
    user:User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(username:String!, instrument: String!, description:String!, genre: String!,image:String!, title: String!)
    savedPosts(postData: PostInput!): Comment
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
