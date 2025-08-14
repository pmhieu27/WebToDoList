require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");

const webRoutes = require("./routes/web.js");
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
