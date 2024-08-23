// Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior
//idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

let idadePessoa, nomePessoa
let pessoaMaisVelha = '', maiorIdade = 0
let contador = 0, mediaIdade, mediaIdadeCalculo = 0

while(contador < 5){
   
    nomePessoa = prompt('Qual o nome de uma pessoa?')
    idadePessoa = Number(prompt('Qual a idade dessa pessoa?'))

    mediaIdadeCalculo += idadePessoa

    if(idadePessoa > maiorIdade){
        maiorIdade = idadePessoa
        pessoaMaisVelha = nomePessoa       
    }
    mediaIdade = mediaIdadeCalculo / 5
    contador++
}alert('A pessoa mais velha é a: ' + pessoaMaisVelha + '\nCom a media de idade sendo ' + mediaIdade)

