# REST API

Welcome to my custom REST API! This project is a powerful and flexible RESTful API designed to adapt seamlessly to a wide range of client-server integration needs. Whether you need to manage data, connect to external services, or enable communication between web and mobile applications, my API is here to simplify the process.

# Project Configuration

Configure the project by setting up any necessary environment variables or configuration files. If required, provide detailed instructions for the configuration process.

# Usage

To use this REST API, follow these guidelines:

## API Endpoints

This REST API environment allows users to define their own custom endpoints based on their specific requirements. You have the flexibility to create and use any type of endpoint according to your needs.

Here's a basic example of how to define a custom endpoint:

- `GET /api/custom-endpoint`: Description of your custom endpoint.

Feel free to create endpoints for your specific use cases, following the same pattern. The API is designed to be flexible and adaptable to various scenarios.

## Error Handling

Error handling is an integral part of this REST API. It gracefully handles errors and provides informative responses to clients.

## Middleware

### Custom Logger Middleware
- Logs incoming requests and responses.
- Located in `./middleware/logger`.
- Generates two log files:
  - `reqlog.log`: Logs request details.
  - `errlog.log`: Logs error information.

### Cookie Parser Middleware
- Parses incoming cookies in requests.
- Utilizes the `cookie-parser` library.

### CORS (Cross-Origin Resource Sharing) Middleware
- Enables Cross-Origin Resource Sharing with specified options.
- Located in `./config/corsOptions`.

### JSON Body Parser Middleware
- Parses JSON data in incoming requests.

### Static File Serving Middleware
- Serves static files from the 'public' directory.

### Error Handling Middleware
- Handles errors in the Express application.

### 404 Not Found Handler Middleware
- Handles requests for undefined routes.
- Provides a 404 response for unrecognized paths.

### Route Handling Middleware
- Delegates incoming requests to routes defined in the `./routes/root` module.

Feel free to extend or modify this section to provide additional details or explanations about each middleware if necessary.


# Dependencies

This project relies on the following dependencies:

- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Parse cookies in incoming HTTP requests.
- [cors](https://www.npmjs.com/package/cors): Enable Cross-Origin Resource Sharing (CORS) for secure cross-origin requests.
- [date-fns](https://www.npmjs.com/package/date-fns): Date utility library for formatting and manipulating dates.
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [uuid](https://www.npmjs.com/package/uuid): Generate unique identifiers (UUIDs).

# Contributing

Contributions to this project are welcome! To contribute, follow these steps:

