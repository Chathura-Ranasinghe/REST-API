// Import the 'logEvents' function from the './logger' module
const { logEvents } = require('./logger');

// Define an error handling middleware function
const errorHandler = (err, req, res, next) => {
    // Log the error details, including its name, message, HTTP method, URL, and origin
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log');
    
    // Log the error stack trace to the console
    console.log(err.stack);

    // Determine the HTTP status code based on the response or default to 500 (server error)
    const status = res.statusCode ? res.statusCode : 500;

    // Set the HTTP status code for the response
    res.status(status);

    // Send a JSON response with the error message
    res.json({ message: err.message });
}

// Export the 'errorHandler' middleware function for use in other modules
module.exports = errorHandler;
