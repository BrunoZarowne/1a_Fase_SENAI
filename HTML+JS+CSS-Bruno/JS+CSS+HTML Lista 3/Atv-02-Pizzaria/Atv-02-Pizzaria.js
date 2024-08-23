/* Criar um sistema utilizando HTML e JS, para a Pizzaria da Abgail (print anexo). Deve conter um título, a mensagem de promoção com 15% de
desconto para pedidos acima de R$50 um menu select com 4 sabores, onde um deles custa menos que R$50, outro exatamente R$50, outros dois acima
de R$50. Após selecionar o sabor, ao clicar no botão de comprar, devem ser mostrados em dois inputs: o valor do pedido e o valor com desconto se for acima de R$50.*/

let varPizzaSelecionada = document.getElementById('Pizzas')

let valorInicial = document.getElementById('valorInicial')
let varResultado1 = document.getElementById('resultado1')

let valorFinalPizza = 50 - (50 * 0.15)

function Comprar(){
    if(varPizzaSelecionada.value == '25'){
    valorInicial.value = '25'
    varResultado1.value = '25'
    }else if(varPizzaSelecionada.value == '45'){
        valorInicial.value = '45'
        varResultado1.value = '45'
        }else if(varPizzaSelecionada.value == '50'){
            valorInicial.value = '50'
            varResultado1.value = valorFinalPizza
            }
}