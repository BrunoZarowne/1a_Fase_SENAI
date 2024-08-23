//Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

let numeroUm, numeroDois
let saberNumeroMaior = 0, saberNumeroMenor = 10000

numeroUm = Number(prompt('Qual o primeiro numero? '))

saberNumeroMaior = numeroUm
saberNumeroMenor = numeroUm

numeroDois = Number(prompt('Qual o segundo numero? '))

if(saberNumeroMaior < numeroDois){
    saberNumeroMaior = numeroDois
}else if(saberNumeroMenor > numeroDois){
    saberNumeroMenor = numeroDois
}
alert('O maior numero é o: ' + saberNumeroMaior + '\nO menor numero é o: ' + saberNumeroMenor)
