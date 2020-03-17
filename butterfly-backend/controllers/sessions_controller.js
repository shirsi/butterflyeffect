const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/user.js')
const sessions = express.Router()
//*********presentational route***********//
// sessions.get('/new', (req, res) => {
//   res.render('sessions/new.ejs')
// })
//*********presentational route end***********//
//*********functional route***********//
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username},(err, foundUser) => {
    if(err){
      res.status(400).json({err: err.message})
      // res.send('oops the db had a problem')
    }
    else if(!foundUser){
      // res.send('<a  href="/">Sorry, no user found </a>')
      res.status(400).json('can not find user')
    }else{
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.currentUser = foundUser
        res.status(200).json(foundUser)
        console.log(req.session.currentUser)
        // res.redirect(`/${req.session.currentUser.id}`/index)
      }else{
        // console.log(foundUser);
        res.status(404).json(foundUser.username)
      }
    }
  })
})
// sessions.delete('/',(req, res) => {
//   req.session.destroy(() => {
//     res.redirect('/')
//   })
//
// })
//*********functional route end***********//
module.exports = sessions
