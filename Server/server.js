// Import the Express.js library
const express = require('express')

// Create an instance of Express application
const app = express()

// Import the 'path' module for working with file and directory paths
const path = require('path')

// Import the 'logger' function from the './middleware/logger' module
const { logger } = require('./middleware/logger')

// Import the 'cookieParser' middleware from the 'cookie-parser' library
const cookieParser = require('cookie-parser')

// Import the 'cors' middleware from the 'cors' library
const cors = require('cors')

// Import the 'corsOptions' middleware from the 'cors' library
const corsOptions = require('./config/corsOptions')

// Import the 'errorHandler' function from the './middleware/errorHandler' module
const errorHandler = require('./middleware/errorHandler')

// Define a PORT variable using an environment variable
const PORT = process.env.PORT || 3500

// Use the 'logger' middleware function for logging incoming requests and responses
app.use(logger)

// // Use the 'cors' middleware function to enable Cross-Origin Resource Sharing (CORS)
app.use(cors(corsOptions))

// Use the 'cookieParser' middleware function to parse incoming cookies in requests
app.use(cookieParser())

// This middleware allows your Express application to explain JSON data in incoming requests.
app.use(express.json())

// This middleware serves static files from the 'public' directory.
// It makes files in the 'public' directory accessible to clients.
app.use('/', express.static(path.join(__dirname, 'public')))

// This middleware requires and uses the 'root' route defined in './routes/root'.
// It handles incoming requests to the root URL ('/') by delegating to the 'root' route.
app.use('/', require('./routes/root'))

// Define a route handler for all HTTP methods and any URL path
app.all('*', (req, res) => {

    // Set the HTTP response status code to 404 (Not Found)
    res.status(404)

    // Check if the client accepts HTML responses
    if (req.accepts('html')) {
        // If accepted, send an HTML response by serving the '404.html' file
        res.sendFile(path.join(__dirname, 'view', '404.html'))
    } 
    // Check if the client accepts JSON responses
    else if (req.accepts('json')) {
        // If accepted, send a JSON response with a '404 Not Found' message
        res.json({ message: '404 Not Found' })
    } 
    // If the client doesn't accept HTML or JSON
    else {
        // Set the content type header to plain text
        res.type('txt')
        // Send a plain text response with '404 Not Found' message
        res.send('404 Not Found')
    }
})

// // Use the 'errorHandler' middleware function for Express application
app.use(errorHandler)

// Start the server and listen on the specified PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.listen(PORT, function() { console.log(`Server running on port ${PORT}`)}); Same output with regular function insteed of arrow function