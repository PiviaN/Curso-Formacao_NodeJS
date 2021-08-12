class Produto {
  constructor() {
    this.preco = 15.0;
    this.nome = "Shampoo";
    this.categoria = "Produto de beleza";
    this.fabricante = "Neutrogena";
    this.validade = "12/09/2024";
    this.codigoBarra = "VXHJKSD23UJ55J21N";
  }

  checarValidade() {
    if (this.validade !== "12/09/2024") {
      console.log(
        "Este produto está com a validade vencida. Por favor, troque-o."
      );
    } else {
      console.log("A validade está certa.");
    }
  }

  validarCodigoDeBarra() {
    if (this.codigoBarra !== "VXHJKSD23UJ55J21N") {
      console.log(
        "Código de barras do produto incorreto. Por favor, cheque-o novamente."
      );
    } else {
      console.log("Código de barras correto");
    }
  }
}

const classProduto = new Produto();

classProduto.checarValidade();
classProduto.validarCodigoDeBarra();
