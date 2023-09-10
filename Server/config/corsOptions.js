// Import the 'allowedOrigins' array from the './allowedOrigins' module
const allowedOrigins = require('./allowedOrigins');

// Define CORS options
const corsOptions = {
    // Specify the origin-checking function to determine if a request origin is allowed
    origin: (origin, callback) => {
        // Check if the request origin is in the 'allowedOrigins' array or is absent (for same-origin or trusted requests) like postman
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            // If the origin is allowed, invoke the callback with no errors and 'true'
            //callback(console.log(`Origin is allowed`), true);
            callback(null, true);
        } else {
            // If the origin is not allowed, invoke the callback with an error message
            callback(new Error('Not allowed by CORS'));
        }
    },
    // Enable credentials (cookies, authorization headers, etc.) to be included in CORS requests
    credentials: true,
    // Set the success status code for preflight OPTIONS requests
    optionsSuccessStatus: 200
}

// Export the 'corsOptions' object for use in configuring CORS middleware
module.exports = corsOptions;
