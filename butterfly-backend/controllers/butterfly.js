const express = require("express");
const posts = express.Router();
const Post = require("../models/post.js");
//==========presentational route=========//
posts.get("/", (req, res) => {
  Post.find({}, (err, foundPosts) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundPosts);
  });
});

//==========create route =========//
posts.post('/', async (req, res) => {
    Post.create(req.body, (err, createdPost) =>{
        if (err){
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdPost);
    })
})

//==========functional delete route=========//
posts.delete("/:id", (req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedPost)
    })
})

//==========functional update route=========//
posts.put("/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
        (err, updatedPost) => {
            if(err) {
                res.status(400).json({error: err.message})
            }
            res.status(200).json(updatedPost)
        }
    )
})

module.exports = posts