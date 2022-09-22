const mongoose = require('mongoose')

const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/topdeckDB'

mongoose.connect(connectionStr)

// listeners to monitor database connection
mongoose.connection.on('connected', () => console.log('DB is connected!!'))

mongoose.connection.on('error', (err) => console.log(err.message))

mongoose.connection.on('disconnected', () => console.log('mongoose is disconnected'))
