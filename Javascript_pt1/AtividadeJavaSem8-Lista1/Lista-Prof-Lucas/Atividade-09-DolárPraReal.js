//Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar.
//Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro,
//senão exiba uma mensagem de que está barato.

let valorEmDolares, cotacaoDolar, valorReais

valorEmDolares = Number(prompt('Quantos doláres voce quer converter? '))
cotacaoDolar = Number(prompt('Qual a cotação do dolár? '))

if(cotacaoDolar >= 5){
    valorReais = valorEmDolares * cotacaoDolar
    alert('A cotação do dolár está caro' + '\nO valor em reais que voce vai receber é de: ' + valorReais)
}else if(cotacaoDolar < 5){
    valorReais = valorEmDolares * cotacaoDolar
    alert('A cotação do dolár está barato' + '\nO valor em reais que voce vai receber é de: ' + valorReais)
}