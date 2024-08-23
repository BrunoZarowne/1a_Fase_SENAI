//escreva um programa que leia o valor de 3 ãngulos de um triangulo e escreva se o triangulo é Acutãngulo, Retãngulo ou Obtusãngulo.Sendo que
//Triãngulo Retangulo: possui um angulo reto.(igual a 90)
//Triãngulo Obstangulo: possui um angulo obtuso.(maior que 90)
//Triãngulo Actangula: possui tres angulos aguados.(menor que 90)

let valorAnguloUm, valorAnguloDois, valorAnguloTres
let somaValorAngulos

valorAnguloUm = Number(prompt('Qual o valor do primeiro angulo? '))
valorAnguloDois = Number(prompt('Qual o valor do segundo angulo? '))
valorAnguloTres = Number(prompt('Qual o valor do terceiro angulo? '))

somaValorAngulos = valorAnguloUm + valorAnguloDois + valorAnguloTres

if(somaValorAngulos === 90){
alert('O triangulo é Retangulo')
}else if(somaValorAngulos > 90){
    alert('O triangulo é Obstangulo')
}else if(somaValorAngulos < 90){
    alert('O triangulo é Actangulo')
}