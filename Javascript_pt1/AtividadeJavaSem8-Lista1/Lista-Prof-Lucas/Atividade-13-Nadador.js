//Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence. 
//- "Infantil A" de 5 a 10 anos de idade
//- "Juvenil A" de 11 a 17 anos de idade
//- "Senior" com 18 anos de idade ou mais

let idadeUsuario

idadeUsuario = Number(prompt('Qual sua idade? '))

if(idadeUsuario >=5 && idadeUsuario <=10){
    alert('Voce está na categoria Infantil')
}else if(idadeUsuario >=11 && idadeUsuario <=17){
    alert('Voce está na categoria Juvenil')
}else if(idadeUsuario >=18){
    alert('Voce está na categoria Senior')
}