//Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser
//realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado
//ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere 
//que um saque só pode ser realizado caso haja saldo suficiente.Criar uma variável com um valor que represente o saldo inicial.

let opEscolhida, valorSacar, valorDepositar, saldoFinal
let saldoDoUsuario = 5000

Number(prompt('Qual o numero da sua conta? '))
opEscolhida = Number(prompt('Qual opção vc ira escolher? temos: 1) Saldo 2) Depósito 3) Saque'))

switch(true){
    
    case opEscolhida == 1:
        alert('Seu saldo é de: R$' + saldoDoUsuario)
        break

    case opEscolhida == 2:
        valorDepositar = Number(prompt('Qual valor vc deseja depositar?? '))
        saldoFinal = valorDepositar + saldoDoUsuario
        alert('Seu saldo atual é de: R$' + saldoFinal)
        break

    case opEscolhida == 3:    
        
    valorSacar = Number(prompt('Qual valor deseja sacar? '))
    saldoFinal = saldoDoUsuario - valorSacar

    if(valorSacar > saldoDoUsuario){
      
        alert('Saldo insuficiente para saque, seu saque é de: R$' + saldoDoUsuario)
    }else{
        alert('Seu saldo é de R$' + saldoFinal)
    }

        
}