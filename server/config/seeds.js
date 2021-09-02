const db = require('./connection');

const { User, Post, Comment } = require('../models');
db.once('open', async () => {
  await Post.deleteMany();
  const Posts = await Post.insertMany([
    {
      username: "KurtCobain",
      title: "Need a new Drummer",
      instrument: "Drummer",
      genre: "Alternative",
      description: "Our drummer suck, need a new one. If your name is Dave Grohl, that works",
      image: "client/public/images/alphabet-blocks.jpg",
      // post_id: post[0]._id,
    },
    {
      username: "CourtneyLove",
      title: "Looking for a band",
      instrument: "Singer",
      genre: "Alternative",
      description: "Looking for a band to leech off of my husbands success",
      image: "client/public/images/alphabet-blocks.jpg",
      // post_id: post[1]._id,
    },
    {
      username: "GeorgeHarrison",
      title: "Help!",
      instrument: "Sitar",
      genre: "Traditional Indian",
      description: "The Beatles broke up! Looking to get into Indian music and I need a sitar palyer!",
      image: "client/public/images/alphabet-blocks.jpg",
      // post_id: post[2]._id,
    },
    
  ]);
  console.log('Posts seeded');

  await Comment.deleteMany();
  const Comments = await Comment.insertMany([
    {
      username: 'KurtCobain',
      comment: "Good luck, I guess.",
    },
    {
      username: 'CourtneyLove',
      comment: "I can learn sitar!",
    },  
    {
      username: 'GeorgeHarrison',
      comment: "Cant help you mate, but I can give my buddy Ringo a call!",
    },
  ]);

  console.log('comments seeded');

  await User.deleteMany();
  await User.create({
    username: 'KurtCobain',
    email: 'kurdt@testmail.com',
    password: 'password12345',
  });
  await User.create({
    username: 'CourtneyLove',
    email: 'CourtneyLove@testmail.com',
    password: 'password12345',
  });
  await User.create({
    username: 'GeorgeHarrison',
    email: 'GeorgeHarrison@testmail.com',
    password: 'password12345',
  });
  console.log('users seeded');
  process.exit();
});