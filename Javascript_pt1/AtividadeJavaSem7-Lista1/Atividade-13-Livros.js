//Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3
//livros e mostra na tela o total dos livros sem desconto e com desconto

let livro1, livro2, livro3
let valorLivrosComDescont, valorLivrosSemDesconto, valorComDesconto
let decisaoUsuario

decisaoUsuario = prompt('Olá seja bem vindo a livraria, sabia que na compra de 3 livros vc ganha 15% de desconto vamos aproveitar?' + '\n(responder com sim ou não vou levar só 2 ou não vou levar só 1)')
if(decisaoUsuario == 'sim'){
    alert('Que ótimo, comecemos me falando o valor de cada livro que vc pegou')
    livro1 = Number(prompt('Qual o valor do primeiro livro? '))
    livro2 = Number(prompt('Qual o valor do segundo livro? '))
    livro3 = Number(prompt('Qual o valor do terceiro livro? '))

    valorLivrosSemDesconto = livro1 + livro2 + livro3
    valorLivrosComDescont = (livro1 + livro2 + livro3) * 0.15
    valorComDesconto = valorLivrosSemDesconto - valorLivrosComDescont

    alert('O total a pagar será de: R$' + valorComDesconto)
    alert('\nO valor que voce pagaria sem o desconto seria de: R$' + valorLivrosSemDesconto)
    alert('\nObrigado por comprar conosco, até logo!')
}else if(decisaoUsuario == 'não vou levar só 2'){
    alert('Lamentamos que não queira a promoção mais me fale o valor dos livros que pegou ')
    livro1 = Number(prompt('Qual o valor do primeiro livro? '))
    livro2 = Number(prompt('Qual o valor do segundo livro? '))
    valorLivrosSemDesconto = livro1 + livro2
    alert('O total a pagar ficará: R$' + valorLivrosSemDesconto)
    alert('\nObrigado por comprar conosco, até logo!')
}else if(decisaoUsuario == 'não vou levar só 1'){
    alert('Lamentamos que não queira a promoção mais me fale o valor do livro que pegou ')
    livro1 = Number(prompt('Qual o valor do primeiro livro? '))
    alert('O total a pagar ficará: R$' + livro1)
    alert('\nObrigado por comprar conosco, até logo!')
}