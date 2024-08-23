//>>>>>>>>>>>>>>>>>> Atividade 2 (3,0) <<<<<<<<<<<<<<<<<<<<

//No site Amazon, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para
//definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página
//de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício,
//durabilidade. Criar um sistema utilizando a estrutura condicional SWITCH / CASE, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10)
//sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice
//abaixo de 5 (não ganha destaque), índice de 5 a menor que 7 (destaque na página da categoria), índice de 7 a menor que 9 (destaque em promoções),
//índice igual ou maior a 9 (destaque na página principal).


//Critérios de avaliação:

//(1,0) Receber e armazenar as notas dos três quesitos (avaliação).
//(1,0) Calcular o índice do produto (média aritmética) com três casas após a vírgula e mostrar na tela.
//(1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.

let nomeProduto
let AvaliaçãoUmDoProduto, AvaliaçãoDoisDoProduto, AvaliaçãoTresDoProduto
let somaValoresDasNotas, mediaNotaProdutos

nomeProduto = prompt('Bem vindo a central de avaliações da Amazon\npoderia me falar o nome do item que vc quer avaliar?')
AvaliaçãoUmDoProduto = Number(prompt('Coloque para mim uma nota de 0 a 10 sobre a qualidade do produto'))
AvaliaçãoDoisDoProduto = Number(prompt('Coloque para mim uma nota de 0 a 10 sobre o custo beneficio do produto'))
AvaliaçãoTresDoProduto = Number(prompt('Coloque para mim uma nota de 0 a 10 sobre a durabilidade do produto'))

somaValoresDasNotas = AvaliaçãoUmDoProduto + AvaliaçãoDoisDoProduto + AvaliaçãoTresDoProduto
mediaNotaProdutos = somaValoresDasNotas / 3

switch(true){

    case mediaNotaProdutos < 5:
        alert('O item ' + nomeProduto +' não ganhará destaque pois a nota foi de ' + mediaNotaProdutos.toFixed(2))
        break

    case mediaNotaProdutos >= 5 && mediaNotaProdutos < 7:
        alert('O item ' + nomeProduto +' ganhará destaque na pagina da categoria tendo uma nota de ' + mediaNotaProdutos.toFixed(2))
        break

    case mediaNotaProdutos >= 7 && mediaNotaProdutos < 9:
        alert('O item ' + nomeProduto +' ganhará destaque em promoções tendo a nota de ' + mediaNotaProdutos.toFixed(2))
        break

    case mediaNotaProdutos > 9 && mediaNotaProdutos == 10:
        alert('O item ' + nomeProduto +' ganhará destaque na pagina principal tendo uma nota de ' + mediaNotaProdutos.toFixed(2))
        break

    default:
        alert('O total das notas que vc digitou acabou dando erro no calculo logo não poderemos dizer qual o indice do produto e se pegou destaque.')
}