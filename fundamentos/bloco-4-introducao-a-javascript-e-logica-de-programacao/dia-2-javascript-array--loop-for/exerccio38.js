let arrayNumbers = [6, 9, 5, 8, 9, 3, 9, 5, 9];
let maiorNumero = arrayNumbers[0];
function highestCount(arrayNumbers) {
    let contador = 0;
    for (let index = 0; index < arrayNumbers.length; index++) {
      if (arrayNumbers[index] > maiorNumero) {
        maiorNumero = arrayNumbers[index];
      } else if (maiorNumero === arrayNumbers[index]) {
        contador++;
      }
    }
    return maiorNumero;
}

console.log(maiorNumero);