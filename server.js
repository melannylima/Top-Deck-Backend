const routes = require('./routes')

/* == External Modules == */
const express = require('express')

/* == Internal Modules == */

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3002;

/* == DB connection == */
require('./config/db.connection')

/* == Middleware == */
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* == Routes == */
app.use(routes.lists)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
