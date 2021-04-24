const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if ((url === "/message") & (method === "POST")) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk); // storing the request data as a chunk ( we cannot work with chunk)
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString(); // we have to buffer our chunk before we can work with it
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end(); // if this is not set the code below will also run and cause an error
      }); // write what the use input into a file
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

// module.exports = {
//   handler: requestHandler,

//   someText: "Some hard code text",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard code text";

exports.handler = requestHandler;
exports.someText = "Some hard code text";
