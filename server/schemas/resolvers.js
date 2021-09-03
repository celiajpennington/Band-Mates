const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // getPosts: async () => {
    //   return await Post.find();
    // },
    posts: async () => {
      return Post.find({});
    },

      users: async () => {
      return await User.find().select('-__v -password').populate('posts');
    }
  },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        console.log(user)
        console.log(token)
        return { token, user };
      },
      addPost: async (parent, { postInput }, context) => {
        console.log(context);
        if (context.user) {
           
          { postInput: PostInput }

          const post = new Post({ postInput });

          await Post.findByIdAndUpdate({_id: context.user._id}, { $push: { postInput: PostInput } });

          //{ postInput: PostInput }
          // addUser: async (parent, args) => {
          //   const user = await User.create(args);
          //   const token = signToken(user);
          //   return { token, user };
          // }

          return post;
        }

        throw new AuthenticationError('Not logged in');
      },

      
      
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      }
    }
  }


module.exports = resolvers;
