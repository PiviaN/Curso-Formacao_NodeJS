class PersonagemRPG {
  constructor() {
    this.nome = "Mago007";
    this.classe = "Mago";
    this.raca = "Elfo";
    this.sexo = "Masculino";
    this.servidor = "Elsinore";
    this.poder = 1200;
    this.nivel = 65;
    this.alianca = "";
    this.status = "Online";
  }

  deslogar() {
    if (this.status !== "Offline") {
      this.status = "Offline";
      console.log(`Okay, você está ${this.status} agora.`);
    } else {
      console.log("Você já está deslogado.");
    }
  }

  logar() {
    if (this.status !== "Online") {
      this.status = "Online";
      console.log(`Okay, você está ${this.status} agora.`);
    } else {
      console.log("Você já está logado.");
    }
  }

  removerAlianca() {
    this.alianca = "";
    console.log("Você saiu da sua aliança atual.");
  }

  entrarEmAlianca() {
    if (this.poder < 1000 && this.nivel < 30) {
      console.log(
        "Você ainda não tem poder ou nível suficientes para entrar em uma aliança"
      );
    }
    if (this.alianca !== "") {
      console.log(`Você já está associado à aliança ${this.alianca}`);
    } else {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      readline.question(
        "Qual o nome da aliança que deseja entrar? ",
        (name) => {
          this.alianca = name;
          console.log(`Parabéns! Você entrou na aliança ${this.alianca}!`);
          readline.close();
        }
      );
    }
  }
}

const classPersonagemRPG = new PersonagemRPG();

classPersonagemRPG.logar();
classPersonagemRPG.entrarEmAlianca();
