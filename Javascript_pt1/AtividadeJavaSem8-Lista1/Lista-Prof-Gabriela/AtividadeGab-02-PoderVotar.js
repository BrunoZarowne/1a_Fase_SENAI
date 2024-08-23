//Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela
//podera ou não votar este ano (não é necessario considerar o mês em que ela nasceu)

let anoNascimentoUsuario, calculoIdadeUsuario

anoNascimentoUsuario = Number(prompt('Em que ano voce nasceu? (exemplo:2006)'))

calculoIdadeUsuario = 2024 - anoNascimentoUsuario

if(calculoIdadeUsuario > 16){
    alert('Voce pode votar!')
}else if(calculoIdadeUsuario < 16){
    alert('Voce não pode votar!')
}

