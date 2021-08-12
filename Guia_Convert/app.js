const Reader = require("./Reader");
const Processor = require("./Processor");
const HtmlParser = require("./HtmlParser");
const Table = require("./table");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
  let dados = await leitor.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".PDF", html);
}

main();
