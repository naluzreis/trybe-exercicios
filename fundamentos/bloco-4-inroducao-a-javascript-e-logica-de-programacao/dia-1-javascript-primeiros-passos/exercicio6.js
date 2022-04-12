let xadrez =  'PeaO';

switch(xadrez.toLowerCase()){

  case "rei":
    console.log('Rei: Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.');
    break;

  case "rainha":
    console.log('Rainha: Sem restrições,tem livre movimentação no jogo na horizontal, vertical e diagonais.');
    break;

  case 'torre':
    console.log('Torre: pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).');
    break;

  case 'bispo':
    console.group('Bispo: Sem restrição de número de casas, mas somente no sentido diagonal.');
    break;

  case 'cavalo':
    console.log('Cavalo: Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.');
    break;

  case 'peao':
    console.log('Peão: Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.');
    break;
  
}