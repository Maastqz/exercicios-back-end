let palavras = ["calçados", "boneca", "helicóptero", "garrafa", "perpendicular"];


function filtrarPalavrasLongas(array, comprimento) {
    return array.filter(palavra => palavra.length > comprimento);
  }
  

  let palavrasFiltradas = filtrarPalavrasLongas(palavras, 7);
  
  console.log("Palavras filtradas:", palavrasFiltradas);