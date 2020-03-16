//======dependencies===========//
const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
PORT = 3003
//=======config=============//
const app = express()



mongoose.connect('mongodb://localhost:27017/butterfly', {useNewUrlParser:true})
mongoose.connection.once('open', () => {
  console.log('connect to mongoose...');
})
//=======mongoose=============//
mongoose.connection.on('error', () => {
  console.log(err.message + 'is Mongod not running?');
})
mongoose.connection.on('disconnected', () => {
  console.log('mongo disconnected');
})
//=======middleware=============//
app.use(express.json())
// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))
//=======controllers=============//
const butterflyController = require("./controllers/butterfly.js")
app.use("/butterfly", butterflyController);

//=======listener=============//
app.get('/', (req, res) => {
  res.send('hi')
})
app.listen(PORT, () => {
  console.log('serving is listening : ', PORT);
})
