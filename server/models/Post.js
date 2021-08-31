const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const postSchema = new Schema({
  username: [
    {
      type: String,
    },
  ],
  instrument: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
    title: {
    type: String,
    required: true,
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    required: true
  }]
  
});

module.exports = postSchema;
