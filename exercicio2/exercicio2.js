let nomes = ["Ana", "Eloisa", "Taylor", "Agatha", "Josi", "Kaio", "Vitoria", "Amanda"];


function removerElementos(array, escolha) {
    if (escolha === "inicio") {
      array.shift();
    } else if (escolha === "final") {
      array.pop();
    }
    return array;
  }
  

escolha = "inicio";
nomes = removerElementos(nomes, escolha);
console.log("Removendo no início:", nomes);


escolha = "final";
nomes = removerElementos(nomes, escolha);
console.log("Removendo no final:", nomes);