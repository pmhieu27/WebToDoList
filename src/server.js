const express = require('express');// Import the express module
const path = require('path'); // Import the path module
require('dotenv').config(); // Load environment variables from .env file
console.log("Check env", process.env.PORT); // Log the environment variables
const app = express(); // Create an instance of express
const port = process.env.PORT; // Set the port to listen on
const hostname = process.env.HOST_NAME; // Set the hostname
//config engines
app.set('view engine', 'ejs'); // Set the view engine to ejs
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/abc', (req, res) => {
    res.render('example.ejs') // Render the example.ejs view
});
app.get('/aaa', (req, res) => {
    res.send('<h1>Lo cc</h1>')
});
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});
