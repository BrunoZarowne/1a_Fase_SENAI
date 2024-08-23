//Crie uma programa que verifique se uma pessoa pode dirigir. Deve ser perguntada a a idade da pessoa e se ela tiver idade suficiente
//para dirigir (18 anos ou mais), exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir".

let idade

idade = Number(prompt('Qual sua idade?'))

if(idade >= 18){
    alert('Voce pode dirigir')
}else{
    alert('Voce não pode dirigir')
}