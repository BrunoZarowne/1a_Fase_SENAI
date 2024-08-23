//Criar um programa que gere um vetor com 10 números inteiros aleatórios entre 0 e 20. Mostre o vetor na tela. (DESAFIO: O vetor não pode conter números repetidos)

let numerosAleatorios = []
let numeroAleatorio
let NumASerGerados = 10
let max = 20, min = 0


for(i=0; i < NumASerGerados; i++){
    numeroAleatorio = Math.floor(Math.random(10) * (max - min + 1) + min)
    numerosAleatorios.push(numeroAleatorio)
    
}

console.log(numerosAleatorios)