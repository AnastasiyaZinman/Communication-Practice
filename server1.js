// Get dependencies
const express = require('express')
const http = require('http')

// Get our API routes & Initialize Express
const api = require('./server/routes/api')
const app = express()

// Set our API routes
app.use('/', api)

// Get port and store in Express
const port = process.env.PORT || '3000'
app.set('port', port)

// Create & run the server
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`))