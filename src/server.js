require('dotenv').config(); // Load environment variables from .env file
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME || 'localhost';
const express = require('express');// Import the express module
const path = require('path'); // Import the path module
const configViewgine = require('./config/viewgine'); // Import the view engine configuration
const webrouters = require('./route/web'); // Import the web router
const app = express(); // Create an instance of express
const connection = require('./config/database'); // Import the database connection
//config engines
configViewgine(app); // Apply the view engine configuration
//routes
app.use('/',webrouters);

// Create the connection to database
connection.query(
    'SELECT * from users;',
    function (err, results, fields) {
    console.log(">>>results", results); // results contains rows returned by server
    console.log(">>>fields", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});
