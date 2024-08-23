// Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

let pesoUsuario, alturaUsuario
let resultado

pesoUsuario = Number(prompt('Qual seu peso? '))
alturaUsuario = Number(prompt('Qual sua altura?(use numero inteiro) '))

resultado = (pesoUsuario / alturaUsuario) * pesoUsuario

alert('Seu IMC é de: ' + resultado)