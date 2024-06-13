let numeros = [4, 7, -3, 1, 6, -3, -9, 2, 9, 5];

function dobrarValores(array) {
    return array.map(num => num * 2);
  }
  
  let numerosDobrados = dobrarValores(numeros);
  
  console.log("tabela inicial:", numeros);
  console.log("tabela dobrada:", numerosDobrados);