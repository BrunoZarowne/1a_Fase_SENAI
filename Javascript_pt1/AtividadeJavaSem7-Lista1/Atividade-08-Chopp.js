//Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp.
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado
//e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp,
//digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

let numeroPessoasConvidadas = 45
let qntLitrosDeChoppTem = 300
let mediaLitrosBebidosPorPessoa
let qntsLitrosForamDisperdiçados, choppNaoAberto
let calculoChopp

qntsLitrosForamDisperdiçados = Number(prompt('Quantos litros de chopp foram tomados? '))
choppNaoAberto = Number(prompt('Quantos litros sobraram? '))

calculoChopp = qntLitrosDeChoppTem - qntsLitrosForamDisperdiçados - choppNaoAberto
mediaLitrosBebidosPorPessoa = calculoChopp / numeroPessoasConvidadas

alert('A quantidade de chopp que sobrou foi: ' + calculoChopp + 'Lts')
alert('\nA media de litros por pessoa é: ' + mediaLitrosBebidosPorPessoa)


