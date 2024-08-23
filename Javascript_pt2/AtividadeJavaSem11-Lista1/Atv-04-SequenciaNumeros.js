//Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência,
//interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".

let numeroDigitado
let contador = 10

numeroDigitado = Number(prompt('Digite em ordem os numeros de 10 a 1'))

while(contador == numeroDigitado ) {
    numeroDigitado = Number(prompt('Digite em ordem os numeros de 10 a 1'))
    contador--

    if(contador == 1){
        break
    }
}if(numeroDigitado != contador){
    alert('Você errou a sequência')
}else{
    alert('Você terminou a sequência corretamente')
}