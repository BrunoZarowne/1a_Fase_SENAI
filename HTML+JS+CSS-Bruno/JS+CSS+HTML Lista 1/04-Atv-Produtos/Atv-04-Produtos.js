//Criar um sistema para compra de produtos + desconto, com HTML e JS.
//O sistema deve deve seguir o layout anexo (imagem).

//- O usuário deverá informar dados de 4 produtos (descrição, quantidade e valor).
//- Um percentual de desconto deve ser informado.
//- Ao final deve ser mostrado o valor total da compra com o desconto.

let qntdItemUm = document.getElementById('itemQntdUm')
let qntdItemDois = document.getElementById('itemQntdDois')
let qntdItemTres = document.getElementById('itemQntdTres')
let qntdItemQuatro = document.getElementById('itemQntdQuatro')

let itemValorUm = document.getElementById('valorItemUm')
let itemValorDois = document.getElementById('valorItemDois')
let itemValorTres = document.getElementById('valorItemTres')
let itemValorQuatro = document.getElementById('valorItemQuatro')

let valorFinalItemUm, valorFinalItemDois, valorFinalItemTres, valorFinalItemQuatro
let somaFinalTodosOsItems, somaFinalReal

let valorDesconto = document.getElementById('desconto')
let valorFinalSoma = document.getElementById('valorFinal')

function calculoFinal(){
    valorFinalItemUm = Number(qntdItemUm.value) * Number(itemValorUm.value)
    valorFinalItemDois = Number(qntdItemDois.value) * Number(itemValorDois.value)
    valorFinalItemTres = Number(qntdItemTres.value) * Number(itemValorTres.value)
    valorFinalItemQuatro = Number(qntdItemQuatro.value) * Number(itemValorQuatro.value)
    
    somaFinalTodosOsItems = valorFinalItemUm + valorFinalItemDois + valorFinalItemTres + valorFinalItemQuatro
    somaFinalReal = somaFinalTodosOsItems * (valorDesconto.value / 100)

    valorFinalSoma = somaFinalReal
    alert(valorFinalSoma)
}