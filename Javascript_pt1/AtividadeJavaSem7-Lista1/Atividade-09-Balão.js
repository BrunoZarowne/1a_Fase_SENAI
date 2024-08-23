//Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15
//reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um
//programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

let qntsPessoasVao
let tempoDoPasseio
let valorPorPessoa = 20
let valorPorMetroCubico = 15
let valorGasPorMinuto
let tempoDeVooExemplo = 5
let tempoPorVooExemplo = 10
let valorTotalDasPessoasNoBalao
let valorTotalGastoPorMetroCubico

qntsPessoasVao = prompt('Quantos pessoas vão no balão? ')
tempoDoPasseio = prompt('Qual será o tempo do passeio? ')

valorGasPorMinuto = tempoPorVooExemplo / tempoDeVooExemplo
valorTotalDasPessoasNoBalao = qntsPessoasVao * valorPorPessoa
valorTotalGastoPorMetroCubico = (tempoDoPasseio * valorPorMetroCubico) / valorGasPorMinuto

alert('O valor total a ser cobrado pelas pessoas no passeio é: ' + valorTotalDasPessoasNoBalao)
alert('\nValor total a ser cobrado pelo tempo do passeio é: ' + valorTotalGastoPorMetroCubico)