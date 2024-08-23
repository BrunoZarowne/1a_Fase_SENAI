/* Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final. */

let listaCompras = []

let itemAdicionadoUm
let itemAdicionadoDois
let itemAdicionadoTres

itemAdicionadoUm = prompt('Adiciona um item á lista')
itemAdicionadoDois = prompt('Adiciona outro item á lista')
itemAdicionadoTres = prompt('Adiciona outro item á lista')

listaCompras.push(itemAdicionadoUm)
listaCompras.push(itemAdicionadoDois)
listaCompras.push(itemAdicionadoTres)

if(listaCompras[2] != 'leite'){
    listaCompras.push('leite')
}

alert(listaCompras)
