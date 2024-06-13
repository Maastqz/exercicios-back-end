let strings = ["quadrado", "circulo", "triangulo", "circulo", "triangulo", "triangulo"];

function contarOcorrencias(array) {
    return array.reduce((contador, palavra) => {
      contador[palavra] = (contador[palavra] || 0) + 1;
      return contador;
    }, {});
  }
  let ocorrencias = contarOcorrencias(strings);
  
  console.log("Ocorrências:", ocorrencias);