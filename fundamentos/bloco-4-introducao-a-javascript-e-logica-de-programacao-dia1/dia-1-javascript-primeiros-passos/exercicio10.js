const valorCusto = 15.30;
const valorVenda = 50;
let impostoSobreOCusto = 0.2*valorCusto;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

console.log(impostoSobreOCusto);
console.log(valorCustoTotal);
console.log(lucro);