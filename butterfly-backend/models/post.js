const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: String,
  media:{
    image: String,
    video: String,
    required: true
  },
  caption:String,
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    username: String,
    comment: String
  }
})

module.exports = mongoose.model('Post', postSchema)
