//Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
//A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis
//2) Assinante Gold, ganha 20% de desconto mas paga frete
//3) Assinante Silver, ganha 10% de desconto mas paga frete.
//4) Não assinante, sem benefícios.
//Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4).
//Mostrar na tela o valor da compra de acordo com a opção escolhida.

let valorFrete = 12.50
let valorCompra, valorCompraComDesconto
let categoriaAssinanteUsuario

valorCompra = Number(prompt('Qual o valor da sua compra? '))
categoriaAssinanteUsuario = Number(prompt('Qual sua categoria de assinante? (1, 2, 3 ou 4) '))

switch(categoriaAssinanteUsuario){

    case 1:
        valorCompraComDesconto = valorCompra - (valorCompra * 0.20)
        alert('Por conta do seu nivel de assinante voce não pagara frete!\nValor do seu produto será de: R$' + valorCompraComDesconto)
        break

    case 2:
        valorCompraComDesconto = valorCompra - (valorCompra * 0.20)
        alert('Por conta do seu nivel de assinante voce pagara frete!\nvalor do seu produto será de: R$' + valorCompraComDesconto)
        break

    case 3:
        valorCompraComDesconto = valorCompra - (valorCompra * 0.10)
        alert('Por conta do seu nivel de assinante voce pagara frete!\nValor do seu produto será de: R$' + valorCompraComDesconto)
        break

    case 4:
        alert('Por conta do seu nivel de assinante voce pagara frete\nValor do seu produto será de: R$' + valorCompraComDesconto)
        break

}