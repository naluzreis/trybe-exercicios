let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmética

for(let index = 0; index < numbers.length; index++){
  soma = soma +  numbers[index];
}

mediaAritmética = soma/numbers.length;
console.log("A média aritmética é: " + mediaAritmética);