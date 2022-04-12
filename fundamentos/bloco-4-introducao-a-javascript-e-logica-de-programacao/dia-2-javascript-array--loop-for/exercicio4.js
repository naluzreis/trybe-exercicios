let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmética

for(let index = 0; index < numbers.length; index++){
  soma = soma +  numbers[index];
}

mediaAritmética = soma/numbers.length;

if(mediaAritmética > 20){
  console.log("valor maior que 20");
}else{
  console.log("valor menor ou igual a 20");
}