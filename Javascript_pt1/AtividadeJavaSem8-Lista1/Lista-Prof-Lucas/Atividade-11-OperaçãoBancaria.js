//Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser
//realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado
//ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere
//que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let numeroContaBancaria, operaçãoASerfeita
let valorASerDepositado, valorASerSacado
var saldoDaConta = 0

numeroContaBancaria = Number(prompt('Por favor digite o numero da sua conta bancaria'))
operaçãoASerfeita = Number(prompt('Me diga será a operação a realizada?' + '\nLembrando que temos as seguintes operações que podem ser feitas' + '\n1 - Saldo' + '\n2 - Depósito' + '\n3 - Saque'))

saldoDaConta = 5000
 
if(operaçãoASerfeita == 1){
    alert('O seu saldo é de: ' + saldoDaConta)
}else if(operaçãoASerfeita == 2){
    valorASerDepositado = Number(prompt('Qual valor deseja depositar? '))
    saldoDaConta = valorASerDepositado + saldoDaConta
    alert('Seu saldo atualizado é de: ' + saldoDaConta)
}else if(operaçãoASerfeita == 3){
    valorASerSacado = Number(prompt('Qual valor deseja sacar? '))
    saldoDaConta = saldoDaConta - valorASerSacado
    alert('Seu saldo atualizado é de: ' + saldoDaConta)
}