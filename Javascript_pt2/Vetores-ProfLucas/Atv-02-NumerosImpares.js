//Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let numeros = []
let numerosImpares = []
let numeroDigitado
let somaNumerosImpares = 0

for(i=0; i < 5; i++){
    numeroDigitado = Number(prompt('Digite um numero ai man'))
    numeros.push(numeroDigitado)
    console.log(numeros)
    if(numeroDigitado % 2 != 0){
        numerosImpares.push(numeroDigitado)
        somaNumerosImpares = somaNumerosImpares + numeroDigitado
    }else{}
}

alert('A lista de numeros é: ' + numeros)
alert('A lista de numeros imapres é: ' + numerosImpares)
alert('A soma dos numeros impares são: ' + somaNumerosImpares)