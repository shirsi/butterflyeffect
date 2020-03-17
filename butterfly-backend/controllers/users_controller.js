const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

// users.get('/new', (req, res) => {
//
//   })
// })


users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    } else {

      // req.session.currentUser = createdUser
      res.status(200).json(createdUser)

    }


  })
})









module.exports = users
