const mongoose = require('mongoose')
const Post = require('./post.js')

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  posts: [Post.schema]
})

moduel.exports = User
abcds
