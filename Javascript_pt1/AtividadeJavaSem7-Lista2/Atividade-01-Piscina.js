//Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados,
//é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina.
//Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

let larguraPiscina, comprimentoPiscina, mtsQuadradosDaPiscina
let qntdDeAzulejosASeremComprados, valorTotalASerPago
let valorPorCaixaDeAzuejo = 45.50, valorPorDuasCaixasDeAzulejo

larguraPiscina = Number(prompt('Qual a largura da piscina? (Digitar em mts)'))
comprimentoPiscina = Number(prompt('Qual o comprimento da piscina? (Digitar em mts)'))

mtsQuadradosDaPiscina = larguraPiscina * comprimentoPiscina
qntdDeAzulejosASeremComprados = mtsQuadradosDaPiscina * 2
valorPorDuasCaixasDeAzulejo = valorPorCaixaDeAzuejo * 2
valorTotalASerPago = mtsQuadradosDaPiscina * valorPorDuasCaixasDeAzulejo

alert('O total de azulejos que devem ser comprados são: ' + qntdDeAzulejosASeremComprados + '\nO total a ser pago será de: ' + valorTotalASerPago)
