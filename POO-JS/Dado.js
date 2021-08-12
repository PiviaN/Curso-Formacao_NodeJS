class Dado {
  constructor() {
    this.faces = 100;
  }

  rolarDado() {
    console.log(`O número da vez é: ${parseInt(Math.random() * this.faces)}`);
  }
}

const classDado = new Dado();

classDado.rolarDado();
