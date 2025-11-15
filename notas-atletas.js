let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedias(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let nome = atletas[i].nome;
    let notas = atletas[i].notas;

    // Ordena as notas
    let notasOrdenadas = notas.sort((a, b) => a - b);

    // Remove a menor (pos 0) e a maior nota (pos 4)
    let notasComputadas = notasOrdenadas.slice(0, 4);

    // Soma as notas do meio
    let soma = 0;
    notasComputadas.forEach(function (nota) {
      soma += nota;
    });

    // Calcula a média
    let media = soma / notasComputadas.length;

    // Exibe o resultado
    console.log(`Atleta: ${nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // Linha em branco
  }
}

calcularMedias(atletas);
