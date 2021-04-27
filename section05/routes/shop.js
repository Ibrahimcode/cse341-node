const express = require("express");

// importing path form the os.
const path = require("path");

// importing a custom directory path
const rootDir = require("../utils/path");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  console.log("In another Middleware");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = routes;
