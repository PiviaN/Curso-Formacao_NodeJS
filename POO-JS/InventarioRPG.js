class InventarioRPG {
  constructor() {
    this.qtdItens = 50;
    this.qtdMaxima = 60;
    this.moedas = 30000;
    this.pesoInventario = 79;
    this.pesoMaxInventario = 100;
  }

  verificarQtdInventario() {
    if (this.qtdItens > this.qtdMaxima) {
      let itensExcesso = this.qtdItens - this.qtdMaxima;
      console.log(
        `O seu inventário está com itens demais, por favor, descarte ${itensExcesso} itens.`
      );
    } else {
      let qtdDisponivel = this.qtdMaxima - this.qtdItens;
      console.log(
        `Você tem ${this.qtdItens} itens no seu inventário e ainda pode colocar mais ${qtdDisponivel} itens.`
      );
    }
  }

  verificarPesoInventario() {
    if (this.pesoInventario > this.pesoMaxInventario) {
      let inventarioExcesso = this.pesoInventario - this.pesoMaxInventario;
      console.log(
        `O seu inventário está muito pesado, por favor, descarte ${inventarioExcesso} kilos de itens.`
      );
    } else {
      let qtdPesoDisponivel = this.pesoMaxInventario - this.pesoInventario;
      console.log(
        `Você tem ${this.pesoInventario} kilos de peso no seu inventário e ainda pode colocar mais ${qtdPesoDisponivel}kg de peso nele.`
      );
    }
  }

  aumentarPesoMaxInventario() {
    if (this.moedas > 10000) {
      this.pesoMaxInventario += 1;
      console.log(
        `Você aumentou 1kg de peso máximo do seu inventário, e agora ele tem a capacidade total de ${this.pesoMaxInventario}`
      );
    }
  }

  aumentarQtdMaximaInventario() {
    if (this.moedas > 5000) {
      this.qtdMaxima += 1;
      console.log(
        `Você aumentou a quantidade máxima do seu inventário em 1, e agora ele tem a capacidade total de ${this.qtdMaxima} itens.`
      );
    }
  }
}

const classInventarioRPG = new InventarioRPG();

classInventarioRPG.verificarPesoInventario();
classInventarioRPG.verificarQtdInventario();
classInventarioRPG.aumentarPesoMaxInventario();
classInventarioRPG.aumentarQtdMaximaInventario();
