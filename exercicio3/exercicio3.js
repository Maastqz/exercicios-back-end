let numeros = [4, 7, -3, 1, 6, -3, -9, 2, 9, 5];

function somarPositivos(array) {
    let soma = 0;
    array.forEach((num) => {
      if (num > 0) {
        soma += num;
      }
      console.log(num);
    });
    console.log("Soma dos positivos:", soma);
  }


  somarPositivos(numeros);