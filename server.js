var http = require("http");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello Ingésup</title>");
    response.write('<meta charset="UTF-8"/>');
    response.write("</head>");
    response.write("<body>");
    response.write("Hello Ingésup!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(3000);
console.log("Server is listening");