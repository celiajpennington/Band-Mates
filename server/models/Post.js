const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  username: [
    {
      type: String,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
    
  // comment: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Comment',
  //   required: true
  // }],
  post_id: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  
  
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;