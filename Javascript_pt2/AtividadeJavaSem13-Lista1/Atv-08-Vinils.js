/* Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você tem apenas R$200 para gastar.
Faça um programa que pergunte o nome do vinil e o valor, repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil).
Mostrar na tela:

a) O total gasto em reais dos vinis.
b) O valor que sobrou em dinheiro.
c) Quantos vinis foram comprados.
d) A média de preço dos vinis.
e) O vinil mais caro e o mais barato. */

let carteiraUsuario = 200

let nomeVinil, valorVinil = 0

let valorFinal = 0, valorQueSobrou
let qntsVinisForamComprados = 0
let mediaDePreçoDosVinis
let vinilMaisCaro = 1
let nomeVinilMaisCaro
let vinilMaisBarato = 10
let nomeVinilMaisBarato

while(carteiraUsuario > 0){
    nomeVinil = prompt('Me diga qual o nome do vinil')
    valorVinil = Number(prompt('Poderia me falar o valor desse ' + nomeVinil + '?'))
   
    carteiraUsuario = carteiraUsuario - valorVinil
    alert('Seu saldo no momento é de: ' + carteiraUsuario)

    valorFinal = valorFinal + valorVinil
    
    qntsVinisForamComprados++
    
    if(vinilMaisCaro < valorVinil){
        vinilMaisCaro = valorVinil
        nomeVinilMaisCaro = nomeVinil
    }
    if(vinilMaisBarato > valorVinil){
        vinilMaisBarato = valorVinil
        nomeVinilMaisBarato = nomeVinil
    }
}
valorQueSobrou = valorFinal - 200

mediaDePreçoDosVinis = valorFinal / qntsVinisForamComprados

alert('O vinil mais caro é o ' + nomeVinilMaisCaro + '\ncom o valor de ' + vinilMaisCaro)
alert('O vinil mais barato é o ' + nomeVinilMaisBarato + '\ncom o valor de ' + vinilMaisBarato)
alert('O valor sobrou que sobrou foi de ' + valorQueSobrou)
alert('A media de preço dos vinis é de ' + mediaDePreçoDosVinis)