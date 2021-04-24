console.log("Hello from Node.js");

const fs = require("fs"); // this  import some a file into our js app.

fs.writeFileSync("hello.txt", "Hello from Node.js"); //this creates a new file and write into it
