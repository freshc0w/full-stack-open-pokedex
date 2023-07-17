const express = require('express')
const app = express()
require('dotenv').config()

// Heroku dynamically sets a port

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT)
