class Carrinho {
  constructor() {
    this.qtdProdutos = 5;
    this.valorTotalAcumulado = 80;
    this.produtos = ["Carne", "Frango", "Arroz", "Feijão", "Chocolate"];
    this.precoProdutos = [40, 12, 7, 11, 10];
    this.pesoCarrinho = 11;
    this.pesoProdutos = [4, 3, 1, 1, 2];
  }

  verificarValorTotal() {
    let precoTotalProdutos = this.precoProdutos.reduce((prev, current) => {
      return prev + current;
    });
    if (precoTotalProdutos !== this.valorTotalAcumulado) {
      console.log(
        "O valor total acumulado não corresponde ao preço real da soma de cada produto presente no carrinho."
      );
    } else {
      console.log("O valor total acumulado está correto.");
    }
  }

  verificarPesoCarrinho() {
    let pesoTotalProdutos = this.pesoProdutos.reduce((prev, current) => {
      return prev + current;
    });
    if (pesoTotalProdutos !== this.pesoCarrinho) {
      console.log(
        "O peso total do carrinho não corresponde à soma do peso de cada produto que está dentro dele."
      );
    } else {
      console.log("O peso do carrinho está certo.");
    }
  }
}

const classCarrinho = new Carrinho();

classCarrinho.verificarValorTotal();
classCarrinho.verificarPesoCarrinho();
