const mongoose = require("mongoose");
// curl -X DELETE -H "Content-Type: application/json" -d '{"title":"First Post"}' http://localhost:3003/bookmarks

const postSchema = new mongoose.Schema({
  title: String,
  media: {
    image: String,
    video: String
  },
  caption: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    username: String,
    comment: String
  }
});

module.exports = mongoose.model("Post", postSchema);
