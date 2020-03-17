const mongoose = require('mongoose')
const Post = require('./post.js')

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  posts: [Post.schema]
})

const User = mongoose.model('User', userSchema)
module.exports = User
