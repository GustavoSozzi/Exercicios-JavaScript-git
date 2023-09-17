var jogador1 = prompt('Número do jogador 1: ');
jogador1 = parseInt(jogador1);

var jogador2 = prompt('Número do jogador 2: ');
jogador2 = parseInt(jogador2);

if (jogador1 === jogador2) {
  alert('Vocês empataram');
} else {
  var sorteado = parseInt(Math.random() * 2);
}
