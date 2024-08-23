//Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número.
//Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7. Caso seja
//digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.

let numeroDigitado

numeroDigitado = Number(prompt('Digite um numero de 1 a 7'))

switch(numeroDigitado){

    case 1:
        alert('O dia da semana é Domingo')
        break

    case 2:
        alert('O dia da semana é Segunda')
        break

    case 3:
        alert('O dia da semana é Terça')
        break

    case 4:
        alert('O dia da semana é Quarta')
        break

    case 5:
        alert('O dia da semana é Quinta')
        break

    case 6:
        alert('O dia da semana é Sexta')
        break

    case 7:
        alert('O dia da semana é Sabado')
        break

    default:
        alert('O numero digitado é invalido')



}