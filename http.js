var http = require("http");

http.createServer(function(request, response) {
    response.end("Bem vindo ao meu site!");
}).listen(8081);
console.log("servidor rodando");