const salarioBruto = 5743.97;
let salarioLiquido;
let salarioINSS;
let descontoIR;

if(salarioBruto < 1556.94){
  salarioINSS = salarioBruto*0.92;
}else if(salarioBruto < 2594.92){
  salarioINSS = salarioBruto*0.91;
}else if(salarioBruto < 5189.82){
  salarioINSS = salarioBruto*0.89;
}else if(salarioBruto > 5189.82){
  salarioINSS = salarioBruto - 570.88;
}

console.log(salarioINSS.toFixed(2));

if(salarioBruto <  1903.98){
  descontoIR = salarioINSS;
}else if(salarioBruto < 2826.65){
  descontoIR = salarioINSS*0.075 - 142.80;
}else if(salarioBruto < 3751.05){
  descontoIR = salarioINSS*0.15 - 354,80;
}else if(salarioBruto < 4664.68){
  descontoIR = salarioINSS*0.225 - 636.13;
}else if(salarioBruto > 4664.68){
  descontoIR = salarioINSS*0.275 - 869,36;
}

console.log(descontoIR.toFixed(2));

salarioLiquido = salarioINSS - descontoIR;
console.log(salarioLiquido.toFixed(2));