const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/user.js')
const Post = require('../models/post.js')
const users = express. Router()
// const isAuthenticated = (req, res, next) => {
//   if (req.session.currentUser) {
//     return next()
//   } else {
//     res.redirect('/sessions/new')
//   }
// }

//*********presentational route***********//
// users.get('/',(req, res) => {
//   res.send('Users')
// })

// user new route: sign up new users
users.get('/', (req, res) => {
  User.find({}, (err, foundUser) => {
    if(err){
      res.status(400).json({error: err.message})
    }
    res.status(200).send(foundUser)
  })

})

// users.get('/show', (req, res) => {
//   User.findById(req.session.currentUser._id,(err, foundUser) => {
//     Log.find({},(err, foundLog) => {
//       res.render('users/show.ejs',{
//         logs: foundLog,
//         user: req.session.currentUser,
//         money: foundUser.money
//       })
//     })
//   })
//
//
// })


//*********presentational route end***********//
//*********functional route***********//
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) =>{
        if (err){
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdUser);
    })
})

//*********functional route end***********//
module.exports = users
