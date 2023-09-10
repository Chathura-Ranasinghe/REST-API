// Define allowed origins

// Define an array of allowed origins for Cross-Origin Resource Sharing (CORS)
const allowedOrigins = [
    
    // Add the origin where the React app is hosted, typically with the PORT (e.g., 'https://localhost:3000')
    'https://localhost:3000',
    //'https://www.google.com',
    
    // Add other host URLs that are allowed to access your server (e.g., 'https://example.com')
    ''
]

module.exports = allowedOrigins