const express = require('express'); // Import the express module
const { getHomepage, Locc, cmm } = require('../controller/Homecontroller'); // Import the controller functions
const router = express.Router(); // Create a new router instance

router.get('/', getHomepage); // Route to the getHomepage function in the controller
router.get('/aaa', Locc); // Route to the Locc function in the controller
router.get('/abc', cmm); // Route to the cmm function in the controller
module.exports = router;