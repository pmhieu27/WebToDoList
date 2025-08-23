require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine.js");
const apiRoutes = require('./routes/api');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOSTNAME || "localhost";

//config req.body
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configViewEngine(app);

app.use('/', apiRoutes);

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Include cookies if needed
}));

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
