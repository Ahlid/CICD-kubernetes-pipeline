var http = require('http');
var www = http.createServer(handleRequest);

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World AGAIN!');
};

exports.serverOK = function (){
  return "OK"
}

www.listen(8080);
