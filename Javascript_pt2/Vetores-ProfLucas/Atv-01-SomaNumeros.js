//Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório
//da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)

let numeros = []
let numeroDigitado
let metadeUm, metadeDois
let resultado

for(i=0; i < 10; i++){
    numeroDigitado = Number(prompt('Digite um numero positivo'))
    numeros.push(numeroDigitado)
    
}
metadeUm = numeros[0] + numeros[1]+ numeros[2]+ numeros[3]+ numeros[4]
metadeDois = numeros[5] + numeros[6]+ numeros[7]+ numeros[8]+ numeros[9]

resultado = metadeUm - metadeDois

alert('O resultado é: ' + resultado)