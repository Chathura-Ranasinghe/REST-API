// Import the Express.js library
const express = require('express')

// Import the 'path' module for working with file and directory paths
const path = require('path')

// Create a new instance of an Express router to define routes for this module
const router = express.Router();

// Defines a route for HTTP GET requests that match a specific pattern
router.get('^/$|/index(.html)?' , (req, res) => {

    // Sends the 'index.html' file as the response to the client
    res.sendFile(path.join(__dirname, '..', 'view', 'index.html'))
})

// Exports the router instance to make it available for other parts of the application
module.exports = router