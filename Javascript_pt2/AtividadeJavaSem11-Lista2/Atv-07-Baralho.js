/* Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2.
Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador
tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o
nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!".
(DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).*/

let nomeJogadorUm
let somaCartasJogardorUm = 0
let cartasJogadasJogadorUm
let nomeJogadorDois
let somaCartasJogardorDois = 0
let cartasJogadasJogadorDois

let contador = 0
let numeroMaior
let jogadorVencedor

nomeJogadorUm = prompt('Qual o nome do primeiro jogador?')
nomeJogadorDois = prompt('Qual o nome do segundo jogador?')

while(contador < 5){
    cartasJogadasJogadorUm = Number(prompt(nomeJogadorUm + ' digite o valor da sua carta a ser jogada!'))
    cartasJogadasJogadorDois = Number(prompt( nomeJogadorDois + ' digite o valor da sua carta a ser jogada!'))

    somaCartasJogardorUm = somaCartasJogardorUm + cartasJogadasJogadorUm
    somaCartasJogardorDois = somaCartasJogardorDois + cartasJogadasJogadorDois

    contador++

}

if(somaCartasJogardorUm > somaCartasJogardorDois){
    numeroMaior = somaCartasJogardorUm
    jogadorVencedor = nomeJogadorUm
    alert('Parabens ' + jogadorVencedor + ' voce venceu com uma soma de: ' + numeroMaior)
}else if(somaCartasJogardorUm < somaCartasJogardorDois){
    numeroMaior = somaCartasJogardorDois
    jogadorVencedor = nomeJogadorDois
    alert('Parabens ' + jogadorVencedor + ' voce venceu com uma soma de: ' + numeroMaior)
}else if(somaCartasJogardorUm == somaCartasJogardorDois){
    alert('O jogo empatou!')
}