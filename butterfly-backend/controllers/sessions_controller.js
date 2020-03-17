
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')


// sessions.get('/new', (req, res) => {
//
// })

sessions.post('/', (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, foundUser) => {

    if (err) {
      console.log(err)
      res.status(200).send('oops the db had a problem')

    } else if (!foundUser) {
      res.status(200).send('<a href="/sessions/new">Sorry, no user found</a>')

    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/butterfly')
      } else {

        res.status(200).send('<a href="/sessions/new"> password does not match</a>')
      }
    }
  })
})



sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
