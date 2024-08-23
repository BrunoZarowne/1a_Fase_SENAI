//Criar uma mini-calculadora SIMPLES, com HTML e JS.
//A calculadora deve ter:

//-> Título, duas labels, dois inputs e quatro botões.
//-> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
//-> Mostra o resultado em um alert.

let valorNumeroUm = document.getElementById('valorUm')
let valorNumeroDois = document.getElementById('valorDois')
let resultado

function somarValores(){
    resultado = Number(valorNumeroUm.value) + Number(valorNumeroDois.value)
    alert('Resultado: ' + resultado.toFixed(2))
}

function subtrairValores(){
    resultado = Number(valorNumeroUm.value) - Number(valorNumeroDois.value)
    alert('Resultado: ' + resultado.toFixed(2))
}

function multiplicarValores(){
    resultado = Number(valorNumeroUm.value) * Number(valorNumeroDois.value)
    alert('Resultado: ' + resultado.toFixed(2))
}

function dividirValores(){
    resultado = Number(valorNumeroUm.value) / Number(valorNumeroDois.value)
    alert('Resultado: ' + resultado.toFixed(2))
}
