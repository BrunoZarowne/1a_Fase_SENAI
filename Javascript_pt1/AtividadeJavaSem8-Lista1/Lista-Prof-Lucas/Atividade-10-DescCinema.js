//Faça um programa que verifique a idade de uma pessoa e forneça um desconto no cinema. Deve ser perguntado o valor do ingresso e a idade.
//Se ela tiver 12 anos ou menos, conceda um desconto de 50% no ingresso do cinema. Se ela tiver de 13 a 17 anos, conceda um desconto de 25%.
//Caso contrário (18 anos ou mais), não conceda nenhum desconto. Mostrar ao final o valor que a pessoa deve pagar.

let valorIngresso, idadePessoa, valorIngressoComDesconto

idadePessoa = Number(prompt('Qual sua idade? '))
valorIngresso = Number(prompt('Qual o valor do seu ingresso? '))
valorIngressoComDesconto

if(idadePessoa <= 12){
    valorIngressoComDesconto = valorIngresso * 0.50
    alert('Por conta da sua idade voce tera um desconto de 50%' + '\nValor total ficando de: ' + valorIngressoComDesconto)
}else if(idadePessoa >= 13 && idadePessoa <= 17){
    valorIngressoComDesconto = valorIngresso - (valorIngresso * 0.25)
    alert('Por conta da sua idade voce tera um desconto de 25%' + '\nValor total ficando de: ' + valorIngressoComDesconto)
}if(idadePessoa >= 18){
    alert('Por conta da sua idade voce não tera desconto' + '\nValor total ficando de: ' + valorIngresso)
}