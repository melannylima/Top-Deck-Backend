const routes = require('./routes')
const cors = require('cors')

// ****need to make sure below lines work
// const whitelist = ['http://localhost', 'https://fathomless-sierra-68956.herokuapp.com', undefined]

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log('debug', origin)
//     console.log(origin)
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

/* == External Modules == */
const express = require('express')
require('dotenv').config();
/* == Internal Modules == */

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3002;

/* == DB connection == */
require('./config/db.connection')

/* == Middleware == */
app.use(cors('*'))
//how do i add session below?
//const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// how to use below app.use?
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
    
//   })
// )

/* == Routes == */
//** need to fix below routes.lists */
app.use( routes.lists)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
