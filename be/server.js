require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine.js");
const apiRoutes = require('./routes/api');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOSTNAME || "localhost";
//config cors

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Include cookies if needed
}));

//config req.body
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// configViewEngine(app);

app.use('/', apiRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
