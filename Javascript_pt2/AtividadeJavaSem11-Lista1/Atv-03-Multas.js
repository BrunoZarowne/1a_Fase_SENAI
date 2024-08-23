//Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais
//e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais,
//exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let numeroMultas
let valorMultas
let pontosPerdidos
let somaMultas = 0
let somaPontosPerdidos = 0
let contador = 0

numeroMultas = Number(prompt('Quanta multas deseja cadastrar?'))

while(contador < numeroMultas){
    valorMultas = Number(prompt('Qual o valor da multa?'))
    pontosPerdidos = Number(prompt('Qual pontos foram perdidos?'))

    somaMultas += valorMultas
    somaPontosPerdidos += pontosPerdidos
    
    contador++

    if(somaPontosPerdidos >= 21){
        alert('Voce está irregular\nVoce está com ' + somaPontosPerdidos + ' pontos na sua carteira' + '\nCom uma multa de: R$' + somaMultas)
    }else if(somaPontosPerdidos < 21){
        alert('Voce está regular')
    }
}