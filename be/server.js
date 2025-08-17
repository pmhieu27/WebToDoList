require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine.js");
const webRoutes = require("./routes/web.js");
const connection = require("./config/database.js");

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
