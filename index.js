const http = require("http");

const server = http.createServer((req, res) => {
  // Check if the request is for /about
  if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About Page\n");
  } else {
    // Default home route
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome! This is a DevOps-ready Node.js service running successfully.");
  }
});

server.listen(3000, () => {
  console.log("DevOps Web Service is up and running at http://localhost:3000/");
});


