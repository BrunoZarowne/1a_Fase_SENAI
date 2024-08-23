/* Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **). */

let numeroDigitado
let numeroExpoente
var resultado = 1

numeroDigitado = Number(prompt('Digite um numero'))
numeroExpoente = Number(prompt('Digite seu expoente'))

for(let i = 0; i < numeroExpoente; i++){
    resultado *=numeroDigitado
}
alert('O resultado do calculo de ' + numeroDigitado + ' elevado a ' + numeroExpoente + ' é de: ' + resultado)
