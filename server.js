const routes = require('./routes')

/* == External Modules == */
const express = require('express')

/* == Internal Modules == */

/* == Require Cors == */
const cors = require('cors')
/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3002;

/* == DB connection == */
require('./config/db.connection')

/* == Middleware == */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/* == Routes == */
app.use(routes.lists)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
