//Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.

let senhaUsuario
let confrimarSenhaUsuario
senhaUsuario = Number(prompt('Qual sua senha?'))
confrimarSenhaUsuario = Number(prompt('Digite novamente sua senha'))

while(confrimarSenhaUsuario != senhaUsuario){
    confrimarSenhaUsuario = Number(prompt('Digite novamente sua senha'))
}