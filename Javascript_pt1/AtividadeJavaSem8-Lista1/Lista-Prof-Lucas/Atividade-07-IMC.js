// Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem
//se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

let pesoUsuario, alturaUsuario
let resultado

pesoUsuario = Number(prompt('Qual seu peso? '))
alturaUsuario = Number(prompt('Qual sua altura? (exemplo: 180)'))

resultado = (pesoUsuario / alturaUsuario) * pesoUsuario

if(resultado < 18){
    alert('Voce está abaixo do peso!' + '\nSeu IMC é de: ' + resultado)
}else if(resultado >= 18 && resultado <=25){
    alert('Voce está na faixa ideal de peso!' + '\nSeu IMC é de: ' + resultado)
}else if(resultado > 25){
    alert('Voce está acima do peso!' + '\nSeu IMC é de: ' + resultado)
}