const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log('In the "/second" middleware');
  res.send("<h1> This is the second middleware</h1>");
});

app.use("/", (req, res, next) => {
  console.log('In the "/" middleware');
  //   next();
  res.send("<h1>This is the '/' meddleware</h1>");
});

app.listen(3000);
