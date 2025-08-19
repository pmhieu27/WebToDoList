const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  app.set("views", path.join("./be", "views"));
  app.set("view engine", "ejs");

  //static files
  app.use(express.static(path.join("./be", "public")));
};

module.exports = configViewEngine;
