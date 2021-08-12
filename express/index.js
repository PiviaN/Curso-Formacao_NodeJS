const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bem vindo ao guia do programador");
});

app.get("/blog:artigo?", function() {
    var artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2>Artigo: " + artigo + " </h2>");
    } else {
    res.send("Bem vindo ao blog");
    }
});

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];

    if (canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal fornecido")
    }    
});

app.get("/ola/:nome", function(req, res) {
    res.send("Esta rota que você tentou acessar, " + "<b>" + req.params.nome + "</b>" + " não existe.");
});

app.listen(4000, function(error) {
    if(error) {
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})