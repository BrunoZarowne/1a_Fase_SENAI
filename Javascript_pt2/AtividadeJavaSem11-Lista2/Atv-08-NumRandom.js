/* Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto).
Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada,
deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior".
Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.
(DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor) */

let numeroAleatorio
let numeroChutado
let quantidadeDeChutes = 0
let max = 100
let min = 0

numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
console.log(numeroAleatorio)

while(numeroChutado != numeroAleatorio){
    numeroChutado = Number(prompt('De um chute de qual seja o numero secreto!'))
    quantidadeDeChutes++

    if(numeroChutado < numeroAleatorio){
        alert('O numero digitado está abaixo do numero secreto')
    }else if(numeroChutado > numeroAleatorio){
        alert('O numero digitado está acima do numero secreto')
    }else if( numeroChutado = numeroAleatorio){
        alert('Parabens voce conseguiu achar o numero ' + numeroAleatorio + ' em: ' + quantidadeDeChutes + ' chutes')
    }

}
