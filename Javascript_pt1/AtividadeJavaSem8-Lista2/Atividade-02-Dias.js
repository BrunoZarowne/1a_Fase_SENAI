// Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o
//mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let mesDigitado

mesDigitado = Number(prompt('Digite um mes(forma numerica): '))

switch(mesDigitado){

    case 1:
        alert('O mês possui 31 dias')
        break
    
    case 2:
        alert('O mês possui 29 dias')
        break
    
    case 3:
        alert('O mês possui 31 dias')
        break

    case 4:
        alert('O mês possui 30 dias')
        break

    case 5:
        alert('O mês possui 31 dias')
        break

    case 6:
        alert('O mês possui 30 dias')
        break

    case 7:
        alert('O mês possui 31 dias')
        break

    case 8:
        alert('O mês possui 31 dias')
        break

    case 9:
        alert('O mês possui 30 dias')
        break

    case 10:
        alert('O mês possui 31 dias')
        break

    case 11:
        alert('O mês possui 31 dias')
        break

    case 12:
        alert('O mês possui 31 dias')
        break

    default:
        alert('Voce digitou um numero invalido')


     
}