const path = require('path'); // Import the path module
const express = require('express'); // Import the express module
const configViewgine = (app) => {
    app.set('view engine', 'ejs'); // Set the view engine to ejs
    app.set('views', path.join('./src', 'views')); // Set the views directory
    app.use(express.static(path.join('./src', 'public'))); // Serve static files from the public directory
};
module.exports = configViewgine; // Export the configuration function