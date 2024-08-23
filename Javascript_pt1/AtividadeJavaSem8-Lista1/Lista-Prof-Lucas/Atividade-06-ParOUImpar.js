//Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"

let numeroDigitado
let total=numeroDigitado

numeroDigitado = Number(prompt('Digite um numero'))

if(numeroDigitado % 2 === 0){
    alert('É um numero par!')
}else if(numeroDigitado % 2 !== 0){
    alert('É um numero impar')
}