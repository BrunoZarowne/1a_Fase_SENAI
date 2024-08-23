/*Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par,
ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.*/

let numeroDigitado
let somaNumeros = 0
let contador = 0
let poderFazerAmédia = false
let mediaNumeros

while(contador < 5){
    numeroDigitado = Number(prompt('Por favro digite 5 numeros(um de cada vez)'))
        if(numeroDigitado % 2 == 0){
            poderFazerAmédia = true
            
        }else if(numeroDigitado % 2 != 0){
            poderFazerAmédia = false
        }
        contador++
        somaNumeros = somaNumeros + numeroDigitado
}
mediaNumeros = somaNumeros / 5
if(poderFazerAmédia == false){
    alert('Um dos numeros eram impar')
}else if(poderFazerAmédia == true){
    alert('A media dos numeros é ' + mediaNumeros)
}