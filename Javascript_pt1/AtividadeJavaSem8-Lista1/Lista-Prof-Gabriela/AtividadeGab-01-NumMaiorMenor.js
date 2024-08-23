//Escreva um programa para ler 2 valores(considere que não serão informados valores iguais) e escrever o maior deles.

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
