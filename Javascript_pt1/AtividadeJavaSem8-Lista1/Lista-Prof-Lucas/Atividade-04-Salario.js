//Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let qntsAnosDeServiçoTem, salarioFuncionario
let salarioFinal

qntsAnosDeServiçoTem = Number(prompt('Quantos anos de serviço vc tem? '))
salarioFuncionario = Number(prompt('Qual o seu salario? '))

if(qntsAnosDeServiçoTem >= 5){
    salarioFinal = salarioFuncionario + (salarioFuncionario * 0.05)
    alert('Por conta do longo tempo de serviço voce tera 5% de acréscimo no salário ficando: ' + salarioFinal)
}else if(qntsAnosDeServiçoTem < 5){
    alert('Voce recebera seu salário de forma normal ele sendo: ' + salarioFuncionario)
}