const express = require("express");

// import path from the os
const path = require("path");

// importing a custom directory path
const rootDir = require("../utils/path");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  console.log("In the first Middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

routes.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = routes;
