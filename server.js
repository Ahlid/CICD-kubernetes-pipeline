const http = require('http');
const www = http.createServer(handleRequest);

const PORT = process.env.PORT || 8000;
const SERVER_ID = process.env.SERVER_ID || "Unknown";

const handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end(`Hello World from ${SERVER_ID}!`);
};

exports.serverOK = () => { return "OK" }

www.listen(PORT);
