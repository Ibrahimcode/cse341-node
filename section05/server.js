const fs = require("fs"); // file system module
// const routes = require("./routes");

//importing path from the os

const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin.js");

const shopRoutes = require("./routes/shop");

// importing a custom directory path
const rootDir = require("./utils/path");

const app = express();

// rendering static files
// app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next(); // This allow request to continue to the next middleware in the next line
// });

app.use("/admin", adminRoutes);

app.use(shopRoutes);

// 404 error message

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
