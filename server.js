/* == External Modules == */
const express = require('express')

/* == Internal Modules == */

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3002;

/* == DB connection == */

/* == Middleware == */

/* == Routes == */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
