// Import the 'format' function from the 'date-fns' library for date formatting.
const { format } = require('date-fns')

// Import the 'v4' function from the 'uuid' library for generating UUIDs.
const { v4: uuid } = require('uuid')

// Import the 'fs' module for file system operations (synchronous version).
const fs = require('fs')

// Import the 'fs.promises' module from 'fs' for file system operations (promises-based version).
const fsPromises = require('fs').promises

// Import the 'path' module for working with file paths.
const path = require('path')

// Import necessary modules
const logEvents = async (message, logFileName) => {
    // Get the current date and time in the specified format
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    
    // Create a log item with date, a UUID, the message, and a newline character
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try {
        // Check if the 'logs' directory doesn't exist, create it
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        // Append the log item to the specified log file
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    } catch (err) {
        // Handle and log any errors that occur during the process
        console.log(err)
    }
}

// Define a middleware function called 'logger'
const logger = (req, res, next) => {
    // Log an event containing the HTTP method, URL, and origin from request headers
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    
    // Log the HTTP method and path to the console
    console.log(`${req.method} ${req.path}`)
    
    // Call the next middleware or route handler in the Express.js chain
    next()
}

// Export the 'logEvents' and 'logger' functions for use in other modules
module.exports = { logEvents, logger }
