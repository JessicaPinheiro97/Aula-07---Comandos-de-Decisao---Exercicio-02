const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var nota1 = parseFloat(prompt("Digite a nota 1: "));
var nota2 = parseFloat(prompt("Digite a nota 2: "));
var nota3 = parseFloat(prompt("Digite a nota 3: "));

var media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
  var resultado = "Aprovado";
}
else if (media <= 3) {
  var resultado = "Reprovado";
}
else {
  var resultado = "Recuperação";
}

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Resultado:", resultado);