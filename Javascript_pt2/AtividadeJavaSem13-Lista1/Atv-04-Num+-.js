/* Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado
e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados. */

let numeroDigitado
let maiorNumero  = 0
let menorNumero = 51
let contador = 0

while(contador < 10){
    numeroDigitado = Number(prompt('Digite um numero entre 0 e 50'))

    if(numeroDigitado >= 0 && numeroDigitado <= 50){
        if(numeroDigitado > maiorNumero){
            maiorNumero = numeroDigitado
        }
        if(numeroDigitado < menorNumero){
            menorNumero = numeroDigitado
        }
    }else{
        
    }
    contador++
    
}
alert(maiorNumero)
alert(menorNumero)